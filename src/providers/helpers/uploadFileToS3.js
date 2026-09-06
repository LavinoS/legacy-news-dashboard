import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

const requireEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export default async (file) => {
  if (!file) {
    return null;
  }

  const region = requireEnv('REACT_APP_AWS_REGION');
  const accessKeyId = requireEnv('REACT_APP_AWS_ACCESS_KEY_ID');
  const secretAccessKey = requireEnv('REACT_APP_AWS_SECRET_ACCESS_KEY');
  const bucket = requireEnv('REACT_APP_AWS_S3_BUCKET');

  const client = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const upload = new Upload({
    client,
    params: {
      Bucket: bucket,
      Key: `${Date.now()}.${file.name}`,
      Body: file,
    },
  });

  return upload.done();
};
