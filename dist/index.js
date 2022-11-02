"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./common/env");

var _server = _interopRequireDefault(require("./common/server"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _server.default().router(_routes.default).listen(process.env.PORT);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZXJ2ZXIiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJsaXN0ZW4iLCJwcm9jZXNzIiwiZW52IiwiUE9SVCJdLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY29tbW9uL2Vudic7XG5pbXBvcnQgU2VydmVyIGZyb20gJy4vY29tbW9uL3NlcnZlcic7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZlcigpXG4gIC5yb3V0ZXIocm91dGVzKVxuICAubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZSxJQUFJQSxlQUFKLEdBQ1pDLE1BRFksQ0FDTEMsZUFESyxFQUVaQyxNQUZZLENBRUxDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUZQLEMifQ==