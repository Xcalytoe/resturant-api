const express = require("express");
const {
  getMenus,
  addMenu,
  getSingleMenu,
} = require("../controllers/menuController");

const menuRoute = express.Router();

menuRoute.get("/", getMenus);
menuRoute.get("/:id", getSingleMenu);
menuRoute.post("/add", addMenu);

module.exports = menuRoute;
