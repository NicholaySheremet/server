"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _toDo = _interopRequireDefault(require("./to-do"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var appRouter = (0, _express.Router)();
appRouter.use("/to-do", _toDo["default"]);
var _default = exports["default"] = appRouter;