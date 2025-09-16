const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    isFood: { type: Boolean, default: true },
    name: {
      type: String,
      required: true,
      unique: true,
      set: (v) => v.toUpperCase(),
    },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("menu", menuSchema);
