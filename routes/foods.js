const express = require("express");

const foodRoute = express.Router();
foodRoute.get("/", () => {});
// GET single food
foodRoute.get("/:id", () => {});
foodRoute.post("/create", () => {});
foodRoute.put("/:id", () => {});
foodRoute.delete("/:id", () => {});

module.exports = foodRoute;
