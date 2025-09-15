require("dotenv").config();

console.log(process.env.PORT, "process.env.PORT");

const CONFIG = {
  DB_CONNECTION_URL: process.env.MONGO_DB_CONNECTION_URL,
  PORT: process.env.PORT,
  API_BASE: process.env.API_BASE_URL,
};

module.exports = CONFIG;
