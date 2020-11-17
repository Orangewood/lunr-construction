const { red, blue } = require('chalk');
const fs = require('fs');
const AWS = require('aws-sdk');

const logInfo = (msg) => console.log(blue(msg));
const logError = (msg) => console.log(red(msg));

const rekognition = new AWS.Rekognition();

module.exports = (collectionId) => {
  const ensureCollection = async () => {
    const data = await rekognition.listCollections({}).promise();
    if (!data.CollectionIds.includes(collectionId)) {
      logInfo(`Create collection with name ${collectionId}`);

      await rekognition
        .createCollection({ CollectionId: collectionId })
        .promise();
    }
  };

  const listFaces = async () => {
    const data = await rekognition
      .listFaces({ CollectionId: collectionId })
      .promise();

    return listFaces;
  };

  const readFile = (imagePath) =>
    new Promise((resolve, reject) => {
      fs.readFile(imagePath, (error, data) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(data);
      });
    });

  const indexFace = async (imagePath) => {
    const bytes = await readFile(imagePath);
    const indexParams = { CollectionId: collectionId, Image: { Bytes: bytes } };
    const indexedData = await rekognition.indexFaces(indexParams).promise();
    if (!indexedData.FaceRecords || !indexedData.FaceRecords.length) {
      logError(`No face detected ${imagePath}`);
      return;
    }

    const faceId = indexedData.FaceRecords[0].Face.FaceId;
    logInfo(`Index successful ${imagePath}`);
    return faceId;
  };

  const matchFace = async (imagePath) => {
    const bytes = await readFile(imagePath);
    const searchParams = {
      CollectionId: collectionId,
      Image: { Bytes: bytes },
      FaceMatchThreshold: 99,
      MaxFaces: 1,
    };
    const matchData = await rekognition
      .searchFacesByImage(searchParams)
      .promise();

    if (matchData.FaceMatches.length < 1) {
      logInfo(`No confident match found ${imagePath}`);
      return null;
    }

    const faceId = matchData.FaceMatches[0].Face.FaceId;
    return faceId;
  };

  return { ensureCollection, listFaces, indexFace, matchFace };
};
