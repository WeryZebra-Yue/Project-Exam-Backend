"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = new _mongoose.default.Schema({
  name: {
    type: String,
    required: [true, "Name missing!"]
  }
});

var _default = _mongoose.default.model('User', User);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVc2VyIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibW9kZWwiXSwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgVXNlciA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJOYW1lIG1pc3NpbmchXCJdXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlcik7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsSUFBSUMsaUJBQUEsQ0FBU0MsTUFBYixDQUFvQjtFQUMvQkMsSUFBSSxFQUFFO0lBQ0pDLElBQUksRUFBRUMsTUFERjtJQUVKQyxRQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sZUFBUDtFQUZOO0FBRHlCLENBQXBCLENBQWI7O2VBT2VMLGlCQUFBLENBQVNNLEtBQVQsQ0FBZSxNQUFmLEVBQXVCUCxJQUF2QixDIn0=