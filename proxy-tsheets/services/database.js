const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB();

module.exports = (tableName) => {
  const retrieveFaceMetadata = async (faceId) => {
    const params = {
      Key: {
        FaceId: { S: faceId },
      },
      TableName: tableName,
    };
    const data = await dynamodb.getItem(params).promise();
    return AWS.DynamoDB.Converter.unmarshall(data.Item);
  };

  const saveFaceMetadata = async (faceId, metadata) => {
    const params = {
      Item: AWS.DynamoDB.Converter.marshall({
        FaceId: faceId,
        Metadata: metadata,
      }),
      ReturnConsumedCapacity: 'TOTAL',
      TableName: tableName,
    };
    await dynamodb.putItem(params).promise();
  };

  return { retrieveFaceMetadata, saveFaceMetadata };
};
