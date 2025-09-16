const express = require("express");
const {
  getMenus,
  addMenu,
  getSingleMenu,
  deleteMenu,
  updateMenu,
} = require("../controllers/menuController");

const menuRoute = express.Router();

menuRoute.get("/", getMenus);
menuRoute.get("/:id", getSingleMenu);
menuRoute.post("/add", addMenu);
menuRoute.patch("/:id", updateMenu);
menuRoute.delete("/:id", deleteMenu);

module.exports = menuRoute;
