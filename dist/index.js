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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZXJ2ZXIiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJsaXN0ZW4iLCJwcm9jZXNzIiwiZW52IiwiUE9SVCJdLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY29tbW9uL2Vudic7XHJcbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi9jb21tb24vc2VydmVyJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmVyKClcclxuICAucm91dGVyKHJvdXRlcylcclxuICAubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztlQUVlLElBQUlBLGVBQUosR0FDWkMsTUFEWSxDQUNMQyxlQURLLEVBRVpDLE1BRlksQ0FFTEMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBRlAsQyJ9