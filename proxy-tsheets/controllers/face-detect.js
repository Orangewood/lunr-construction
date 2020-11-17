const os = require('os');
const fs = require('fs');
const { promisify } = require('util');
const multer = require('multer');
const express = require('express');

const router = express.Router();
const ONE_MEGABYTE = 1024 * 1024;
const collectionId = process.env.REKOGNITION_COLLECTION_ID || 'DevCollection';
const tableName = process.env.TABLE_NAME || 'face_metadata_dev';
const validMimeTypes = ['image/jpeg', 'image/jpg', 'image/png'];

module.exports = () => {
  const { matchFace } = require('../services/rekognition')(collectionId);
  const { retrieveFaceMetadata } = require('../services/database')(tableName);

  const validateFile = (file) => {
    const errors = {};

    if (!file || !file.path) {
      errors.file = 'File required';
    }

    return errors;
  };

  const cleanup = (file) => {
    fs.unlink(file.path, (err) => {
      if (err) {
        console.error(err);
      }
    });
  };

  const uploadStrategy = promisify(
    multer({
      dest: os.tmpdir(),
      limits: {
        files: 1,
        fileSize: ONE_MEGABYTE * 8,
      },
      fileFilter: (req, file, cb) => {
        if (!validMimeTypes.includes(file.mimetype)) {
          const error = new Error(
            'File not supported. Supported files are jpeg, jpg & png.'
          );
          error.code = 'FILE_NOT_SUPPORTED';
          cb(error);
          return;
        }

        cb(null, true);
      },
    }).single('file')
  );

  router.post('/', async (req, res, next) => {
    try {
      await uploadStrategy(req, res);

      // validate
      const errors = validateFile(req.file);
      if (Object.keys(errors).length) {
        res
          .status(400)
          .json({ message: Object.values(errors).join('\n'), status: 'error' });
        return;
      }

      let tSheetId = null;
      const match = await matchFace(req.file.path);
      if (match) {
        const faceMetadata = await retrieveFaceMetadata(match);
        if (
          faceMetadata &&
          faceMetadata.Metadata &&
          faceMetadata.Metadata.tSheetId
        ) {
          tSheetId = faceMetadata.Metadata.tSheetId;
        }
      }
      res.json({ tSheetId });

      // file clean up
      cleanup(req.file);
    } catch (error) {
      if (error instanceof multer.MulterError) {
        switch (error.code) {
          case 'LIMIT_FILE_COUNT':
            res.status(400).json({
              message: 'Too many files. Maximum 1 file allowed',
              status: 'error',
            });
            return;
          case 'LIMIT_FILE_SIZE':
            res.status(400).json({
              message: 'File too large. Max(8MB)',
              status: 'error',
            });
            return;
          default:
            next(error);
            return;
        }
      }

      if (error.code === 'FILE_NOT_SUPPORTED') {
        res.status(400).json({
          message: error.message,
          status: 'error',
        });
        return;
      }

      next(error);
    }
  });

  return router;
};
