const express = require("express");

const locationRoute = express.Router();

locationRoute.get("/", () => {});
locationRoute.post("/create", () => {});
locationRoute.delete("/:id", () => {});

module.exports = locationRoute;
