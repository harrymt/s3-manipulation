import * as AWS from "aws-sdk";
import v4 from "uuid/v4";

// Load data from .env file
import * as dotenv from "dotenv";
dotenv.load();

// Load the SDK for JavaScript
AWS.config.update({
    region: "eu-west-2",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

const nameOfBucket = process.env.AWS_BUCKET_NAME;
const textFile = "hello_world.txt";

s3.getObject({ Bucket: nameOfBucket, Key: textFile }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Successfully read data from ${nameOfBucket}/${textFile}`);
        console.log(data.Body.toString(), data);
    }
});

const createBucketAndInsertFile = (name, file) => {
    s3.createBucket({ Bucket: nameOfBucket }, () => {
        const params = {
            Bucket: nameOfBucket,
            Key: textFile,
            Body: "Hello World!"
        };

        s3.putObject(params, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(`Successfully uploaded data to ${nameOfBucket}/${textFile}`);
            }
        });
    });
}
