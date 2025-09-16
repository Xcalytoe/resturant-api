const express = require("express");
const {
  getFoods,
  getSingleFood,
  createFood,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");

const foodRoute = express.Router();

foodRoute.get("/", getFoods);
// GET single food
foodRoute.get("/:id", getSingleFood);
foodRoute.post("/create", createFood);
foodRoute.put("/:id", updateFood);
foodRoute.delete("/:id", deleteFood);

module.exports = foodRoute;
