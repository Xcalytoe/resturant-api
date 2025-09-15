const mongoose = require("mongoose");
const CONFIG = require(".");

function connectMongoDb() {
  try {
    mongoose.connect(CONFIG.DB_CONNECTION_URL).catch((error) => {
      console.log("mongoose:", error?.message);
    });
    mongoose.connection.on("connected", () => {
      console.log("DB Connected");
    });
    mongoose.connection.on("error", (err) => {
      console.log("DB Error:" + err?.message);
    });
    mongoose.connection.on("disconnected", () => {
      console.log("DB disconnected");
    });
  } catch (err) {}
}
module.exports = connectMongoDb;
