"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pino = _interopRequireDefault(require("pino"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const l = (0, _pino.default)({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});
var _default = l;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsIiwicGlubyIsIm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiQVBQX0lEIiwibGV2ZWwiLCJMT0dfTEVWRUwiXSwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvY29tbW9uL2xvZ2dlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGlubyBmcm9tICdwaW5vJztcclxuXHJcbmNvbnN0IGwgPSBwaW5vKHtcclxuICBuYW1lOiBwcm9jZXNzLmVudi5BUFBfSUQsXHJcbiAgbGV2ZWw6IHByb2Nlc3MuZW52LkxPR19MRVZFTCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLENBQUMsR0FBRyxJQUFBQyxhQUFBLEVBQUs7RUFDYkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFETDtFQUViQyxLQUFLLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZOLENBQUwsQ0FBVjtlQUtlUCxDIn0=