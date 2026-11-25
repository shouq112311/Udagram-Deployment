import AWS = require("aws-sdk");
import { config } from "./config/config";

export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_media_bucket },
});

export function getGetSignedUrl(key: string): Promise<string> {
  return new Promise((resolve, reject) => {
    s3.getSignedUrl("getObject", {
      Bucket: config.aws_media_bucket,
      Key: key,
      Expires: 300,
    }, (err, url) => {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  });
}

export function getPutSignedUrl(key: string): Promise<string> {
  return new Promise((resolve, reject) => {
    s3.getSignedUrl("putObject", {
      Bucket: config.aws_media_bucket,
      Key: key,
      Expires: 300,
    }, (err, url) => {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  });
}