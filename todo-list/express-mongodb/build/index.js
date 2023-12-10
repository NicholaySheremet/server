"use strict";

var _express = _interopRequireDefault(require("express"));
var _router = _interopRequireDefault(require("./router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var port = 3000;
app.use("/", _router["default"]);
app.listen(port, function () {
  console.log("App listening on port ".concat(port));
});