const express = require("express");
const { locationRoute, foodRoute, staffRoute, menuRoute } = require("./routes");
const connectDb = require("./config/db.config");
const CONFIG = require("./config/index") || {};

const app = express();
const port = CONFIG?.PORT || "3000";
const baseUrl = CONFIG?.API_BASE || "";
app.use(express.json()); // Parse body

// Connect DB
connectDb();
// Routes
app.use(baseUrl + "/locations", locationRoute);
app.use(baseUrl + "/foods", foodRoute);
app.use(baseUrl + "/staffs", staffRoute);
app.use(baseUrl + "/menus", menuRoute);

// 404 error
app.use((_, res) => {
  return res.status(404).json({
    data: null,
    message: "Route not found!",
  });
});

// Additional error
app.use((err, _, res, next) => {
  console.log("rfdchxvghdbxuikjniokm");
  // Duplicate key error (code 11000)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0]; // e.g. "name"
    const value = err.keyValue[field]; // e.g. "Porridge Beans"
    return res.status(400).json({
      success: false,
      message: `${field} "${value}" already exists`,
    });
  }

  // Validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: Object.values(err.errors)
        .map((val) => val.message)
        .join(", "),
    });
  }

  // Default fallback
  res.status(500).json({
    success: false,
    message: err?.message || "Opps! Something went wrong",
  });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
// process.exit(1);
