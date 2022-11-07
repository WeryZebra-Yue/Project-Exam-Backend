"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = _interopRequireWildcard(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = express.Router().post('/', _controller.default.create).get('/', _controller.default.all).get('/:id', _controller.default.byId);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsImNvbnRyb2xsZXIiLCJjcmVhdGUiLCJnZXQiLCJhbGwiLCJieUlkIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc2VydmVyL2FwaS9jb250cm9sbGVycy9leGFtcGxlcy9yb3V0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cHJlc3NcclxuICAuUm91dGVyKClcclxuICAucG9zdCgnLycsIGNvbnRyb2xsZXIuY3JlYXRlKVxyXG4gIC5nZXQoJy8nLCBjb250cm9sbGVyLmFsbClcclxuICAuZ2V0KCcvOmlkJywgY29udHJvbGxlci5ieUlkKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWVBLE9BQU8sQ0FDbkJDLE1BRFksR0FFWkMsSUFGWSxDQUVQLEdBRk8sRUFFRkMsbUJBQUEsQ0FBV0MsTUFGVCxFQUdaQyxHQUhZLENBR1IsR0FIUSxFQUdIRixtQkFBQSxDQUFXRyxHQUhSLEVBSVpELEdBSlksQ0FJUixNQUpRLEVBSUFGLG1CQUFBLENBQVdJLElBSlgsQyJ9