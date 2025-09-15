const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  state: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  city: { type: String },
});

module.exports = mongoose.model("location", locationSchema);
