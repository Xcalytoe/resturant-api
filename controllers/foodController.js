const Foods = require("../models/Food");
const mongoose = require("mongoose");

// Get all foods
const getFoods = async (_, res) => {
  try {
    const foods = await Foods.find();
    res.status(200).json({
      data: foods,
      message: "Data retireved successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

// Get single food
const getSingleFood = async (req, res) => {
  const foodId = req?.params?.id;
  // Validate ID format
  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    return res.status(404).json({
      message: "Food not found!",
    });
  }
  try {
    const food = await Foods.findById(foodId);

    res.status(200).json({
      message: "Data retireved successfully",
      data: food,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const createFood = async (req, res) => {
  const body = req?.body;
  const createFood = await Foods.create(body);
  res.status(200).json({
    message: "Created successfully",
    data: createFood,
  });
};

const updateFood = async (req, res) => {
  const foodId = req?.params?.id;
  const body = req?.body;

  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    return res.status(404).json({
      message: "Food not found!",
    });
  }
  // Check if name is provided (and not empty)
  if (!body?.name || body?.name.trim() === "") {
    return res.status(400).json({
      message: "Food name is required",
    });
  }
  try {
    const updateFood = await Foods.findByIdAndUpdate(foodId, body, {
      new: true,
      runValidators: true,
    });
    if (!updateFood) {
      return res.status(404).json({
        message: "Food not found!",
      });
    }
    res.status(200).json({
      message: "Food updated successfully",
      data: updateFood,
    });
  } catch (err) {
    res.status(500).json({
      hasError: true,
      message: err?.message || "An error occoured",
    });
  }
};

const deleteFood = async (req, res) => {
  const foodId = req?.params?.id;
  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    return res.status(404).json({
      message: "Food not found!",
    });
  }
  try {
    const deleteFood = await Foods.findByIdAndDelete(foodId);
    if (!deleteFood) {
      return res.status(404).json({
        message: "Food not found!",
      });
    }
    res.status(200).json({
      message: "Food deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      hasError: true,
      message: err?.message || "An error occoured",
    });
  }
};
module.exports = {
  getFoods,
  getSingleFood,
  createFood,
  updateFood,
  deleteFood,
};
