"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Admin = new _mongoose.default.Schema({
  email: {
    type: String,
    required: [true, "Name missing!"]
  },
  password: {
    type: String,
    required: [true, "Password missing!"]
  },
  edit: {
    type: Boolean,
    default: false
  }
});

var _default = _mongoose.default.model("Admin", Admin);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBZG1pbiIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsImVkaXQiLCJCb29sZWFuIiwiZGVmYXVsdCIsIm1vZGVsIl0sInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL21vZGVscy9BZG1pbk1vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IEFkbWluID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJOYW1lIG1pc3NpbmchXCJdLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQYXNzd29yZCBtaXNzaW5nIVwiXSxcclxuICB9LFxyXG4gIGVkaXQ6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiQWRtaW5cIiwgQWRtaW4pO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLEtBQUssR0FBRyxJQUFJQyxpQkFBQSxDQUFTQyxNQUFiLENBQW9CO0VBQ2hDQyxLQUFLLEVBQUU7SUFDTEMsSUFBSSxFQUFFQyxNQUREO0lBRUxDLFFBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxlQUFQO0VBRkwsQ0FEeUI7RUFLaENDLFFBQVEsRUFBRTtJQUNSSCxJQUFJLEVBQUVDLE1BREU7SUFFUkMsUUFBUSxFQUFFLENBQUMsSUFBRCxFQUFPLG1CQUFQO0VBRkYsQ0FMc0I7RUFTaENFLElBQUksRUFBRTtJQUNKSixJQUFJLEVBQUVLLE9BREY7SUFFSkMsT0FBTyxFQUFFO0VBRkw7QUFUMEIsQ0FBcEIsQ0FBZDs7ZUFlZVQsaUJBQUEsQ0FBU1UsS0FBVCxDQUFlLE9BQWYsRUFBd0JYLEtBQXhCLEMifQ==