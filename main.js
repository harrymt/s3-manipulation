import { S3, config, SharedIniFileCredentials } from "aws-sdk";

// Load the SDK for JavaScript
const setupAWSConfig = (region = "us-west-2", profile = "default") => {
    config.update({ region });
    config.credentials = new SharedIniFileCredentials({ profile });
};

const s3 = new S3({apiVersion: "2006-03-01"});
