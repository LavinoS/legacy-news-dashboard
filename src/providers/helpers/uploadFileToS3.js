import AWS from 'aws-sdk';

export default async (file) => {
  if (!file) {
    return null;
  }

  const s3 = new AWS.S3({
    accessKeyId: 'AKIA33UREY3ZG47DEOHC',
    secretAccessKey: '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',
    region: 'eu-north-1',
  });

  const params = {
    Bucket: 'legacy-news',
    Key: `${Date.now()}.${file.name}`,
    Body: file,
  };

  return await s3.upload(params).promise();
};
