// config/dynamoDBClient.js
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
require("dotenv").config();

const dynamoDBClient = new DynamoDBClient({
  region: "eu-north-1",
  credentials: {
    accessKeyId: "wKOWqS/CevoGHGv+korU4hSz19D3nwh7L4cvSoMv",
    secretAccessKey: "AKIAW3MD7MGL7YJSJ3GB",
  },
});

module.exports = dynamoDBClient;
