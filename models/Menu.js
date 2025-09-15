const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  type: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("menu", menuSchema);
