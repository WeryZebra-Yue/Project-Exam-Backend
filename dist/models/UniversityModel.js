"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const University = new _mongoose.default.Schema({
  name: {
    type: String
  },
  distance: {
    type: Number
  }
});

var _default = _mongoose.default.model("University", University);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVbml2ZXJzaXR5IiwibW9uZ29vc2UiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsImRpc3RhbmNlIiwiTnVtYmVyIiwibW9kZWwiXSwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvbW9kZWxzL1VuaXZlcnNpdHlNb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVbml2ZXJzaXR5ID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgZGlzdGFuY2U6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiVW5pdmVyc2l0eVwiLCBVbml2ZXJzaXR5KTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsSUFBSUMsaUJBQUEsQ0FBU0MsTUFBYixDQUFvQjtFQUNyQ0MsSUFBSSxFQUFFO0lBQ0pDLElBQUksRUFBRUM7RUFERixDQUQrQjtFQUlyQ0MsUUFBUSxFQUFFO0lBQ1JGLElBQUksRUFBRUc7RUFERTtBQUoyQixDQUFwQixDQUFuQjs7ZUFTZU4saUJBQUEsQ0FBU08sS0FBVCxDQUFlLFlBQWYsRUFBNkJSLFVBQTdCLEMifQ==