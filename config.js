/* eslint-disable quotes */
const dotenv = require("dotenv");

dotenv.config();

const configMongoose = {
  PORT: 5000,
  MONGODB_URL: "mongodb://localhost:27017/amazone",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
  accessKeyId: process.env.accessKeyId || "accessKeyId",
  secretAccessKey: process.env.secretAccessKey || "secretAccessKey",
};

module.exports = configMongoose;
