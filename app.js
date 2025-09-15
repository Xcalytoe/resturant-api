const express = require("express");
const { locationRoute, foodRoute, staffRoute } = require("./routes");
const connectDb = require("./config/db.config");
const CONFIG = require("./config/index") || {};

const app = express();
const port = CONFIG?.PORT || "3000";
const baseUrl = CONFIG?.API_BASE_URL || "";
app.use(express.json()); // Parse body

// Connect DB
connectDb();
// Routes
app.use(baseUrl + "/location", locationRoute);
app.use(baseUrl + "/food", foodRoute);
app.use(baseUrl + "/staff", staffRoute);

// 404 error
app.use((_, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found!",
  });
});

// Additional error
app.use((err, _, res) => {
  return res.status(500).json({
    hasError: true,
    message: err?.message || "Opps! Something went wrong",
  });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
// process.exit(1);
