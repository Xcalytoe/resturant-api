const express = require("express");
const { locationRoute, foodRoute, staffRoute } = require("./routes");
const connectDb = require("./config/db.config");
const CONFIG = require("./config/index") || {};

const app = express();
const port = CONFIG?.PORT || "3000";
const baseUrl = CONFIG?.API_BASE_URL || "";
app.use(express.json()); // Parse body

// Connect DB
(() => {
  try {
    connectDb();
    // Routes
    app.use(baseUrl + "/location", locationRoute);
    app.use(baseUrl + "/food", foodRoute);
    app.use(baseUrl + "/staff", staffRoute);

    app.listen(port, () => {
      console.log(`Server started on port: ${port}`);
    });
  } catch (e) {
    console.log("errrrrr", e);
    process.exit(1);
  }
})();
