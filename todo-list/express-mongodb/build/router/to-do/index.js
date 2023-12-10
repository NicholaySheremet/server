"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var toDoRouter = (0, _express.Router)();
toDoRouter.get("/", function (req, res) {
  res.send("Get list of to-do");
});
toDoRouter.get("/delete", function (req, res) {
  res.send("Delete to-do from list");
});
toDoRouter.get("/update", function (req, res) {
  res.send("Update to-do in list");
});
var _default = exports["default"] = toDoRouter;