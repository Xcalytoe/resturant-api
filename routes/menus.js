const express = require("express");

const menuRoute = express.Router();

menuRoute.get("/", () => {});
menuRoute.get("/:id", () => {});

module.exports = menuRoute;
