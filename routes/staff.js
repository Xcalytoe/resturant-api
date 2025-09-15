const express = require("express");

const staffRoute = express.Router();

staffRoute.get("/", () => {});
staffRoute.get("/:id", () => {});
staffRoute.post("/add", () => {});
staffRoute.delete("/:id", () => {});
staffRoute.put("/:id", () => {});

module.exports = staffRoute;
