#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { red, blue, green } = require('chalk');
const glob = require('glob');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const logInfo = (msg) => console.log(blue(msg));
const logError = (msg) => console.log(red(msg));
const logSuccess = (msg) => console.log(green(msg));
let folder = process.argv[2];

if (!folder) {
  logError('Folder parameter missing.');
  process.exit();
}

const absPath = path.resolve(folder);

// validate folder path
try {
  const stat = fs.statSync(absPath);
  if (!stat.isDirectory()) {
    throw new Error('Given path does not look like a folder');
  }
} catch (error) {
  if (error.code === 'ENOENT') {
    logError(`Folder does not exists. [${folder}]`);
  } else {
    logError(`${error.message} [${folder}]`);
  }
  process.exit();
}

const files = glob
  .sync('*.@(jpg|jpeg|png)', {
    cwd: absPath,
    absolute: true,
  })
  .map((file) => {
    const nameWithExt = path.basename(file);
    const name = nameWithExt.substring(0, nameWithExt.lastIndexOf('.'));

    return { path: file, metadata: { tSheetId: name } };
  })
  .filter(({ metadata }) => metadata.tSheetId);
if (!files.length) {
  logError(`${files.length} images found`);
  process.exit();
}

logInfo(`${files.length} images found`);

const collectionId = process.env.REKOGNITION_COLLECTION_ID || 'DevCollection';
const { ensureCollection, indexFace } = require('../services/rekognition')(
  collectionId
);
const tableName = process.env.TABLE_NAME || 'face_metadata_dev';
const { saveFaceMetadata } = require('../services/database')(tableName);

(async () => {
  let done = 0;
  let notDone = 0;
  for (const file of files) {
    logInfo(`\nProcessing... [${file.path}]`);

    try {
      await ensureCollection();
      const faceId = await indexFace(file.path);
      await saveFaceMetadata(faceId, file.metadata);

      logSuccess(`Processed [${file.path}]`);
      done += 1;
    } catch (error) {
      logError(`Failed due to : ${error.message} [${file.path}]`);
      notDone += 1;
    }
  }

  logInfo(
    `\nFinished. ${green(`Success: ${done}`)} ${red(`Failed: ${notDone}`)}`
  );
})();
