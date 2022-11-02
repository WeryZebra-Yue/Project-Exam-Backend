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

var _default = express.Router().post("/auth", _controller.default.signIn).post("/addExaminer", _controller.default.addExaminer).get("/getExaminers", _controller.default.getExaminers).get("/getExaminers/:id", _controller.default.getExaminersUsingId).get("/getAllExaminers", _controller.default.getAllExaminers).post("/addAdmin", _controller.default.addAdmin).post("/updateExaminer", _controller.default.updateExaminer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsImNvbnRyb2xsZXIiLCJzaWduSW4iLCJhZGRFeGFtaW5lciIsImdldCIsImdldEV4YW1pbmVycyIsImdldEV4YW1pbmVyc1VzaW5nSWQiLCJnZXRBbGxFeGFtaW5lcnMiLCJhZGRBZG1pbiIsInVwZGF0ZUV4YW1pbmVyIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc2VydmVyL2FwaS9jb250cm9sbGVycy9hZG1pbi9yb3V0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHByZXNzXHJcbiAgLlJvdXRlcigpXHJcbiAgLnBvc3QoXCIvYXV0aFwiLCBjb250cm9sbGVyLnNpZ25JbilcclxuICAucG9zdChcIi9hZGRFeGFtaW5lclwiLCBjb250cm9sbGVyLmFkZEV4YW1pbmVyKVxyXG4gIC5nZXQoXCIvZ2V0RXhhbWluZXJzXCIsIGNvbnRyb2xsZXIuZ2V0RXhhbWluZXJzKVxyXG4gIC5nZXQoXCIvZ2V0RXhhbWluZXJzLzppZFwiLCBjb250cm9sbGVyLmdldEV4YW1pbmVyc1VzaW5nSWQpXHJcbiAgLmdldChcIi9nZXRBbGxFeGFtaW5lcnNcIiwgY29udHJvbGxlci5nZXRBbGxFeGFtaW5lcnMpXHJcbiAgLnBvc3QoXCIvYWRkQWRtaW5cIiwgY29udHJvbGxlci5hZGRBZG1pbilcclxuICAucG9zdChcIi91cGRhdGVFeGFtaW5lclwiLCBjb250cm9sbGVyLnVwZGF0ZUV4YW1pbmVyKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWVBLE9BQU8sQ0FDbkJDLE1BRFksR0FFWkMsSUFGWSxDQUVQLE9BRk8sRUFFRUMsbUJBQUEsQ0FBV0MsTUFGYixFQUdaRixJQUhZLENBR1AsY0FITyxFQUdTQyxtQkFBQSxDQUFXRSxXQUhwQixFQUlaQyxHQUpZLENBSVIsZUFKUSxFQUlTSCxtQkFBQSxDQUFXSSxZQUpwQixFQUtaRCxHQUxZLENBS1IsbUJBTFEsRUFLYUgsbUJBQUEsQ0FBV0ssbUJBTHhCLEVBTVpGLEdBTlksQ0FNUixrQkFOUSxFQU1ZSCxtQkFBQSxDQUFXTSxlQU52QixFQU9aUCxJQVBZLENBT1AsV0FQTyxFQU9NQyxtQkFBQSxDQUFXTyxRQVBqQixFQVFaUixJQVJZLENBUVAsaUJBUk8sRUFRWUMsbUJBQUEsQ0FBV1EsY0FSdkIsQyJ9