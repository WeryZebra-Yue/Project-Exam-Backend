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
  role: {
    type: String,
    default: false
  },
  passwordLength: {
    type: Number,
    default: 0
  }
});

var _default = _mongoose.default.model("Admin", Admin);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBZG1pbiIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0IiwicGFzc3dvcmRMZW5ndGgiLCJOdW1iZXIiLCJtb2RlbCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9tb2RlbHMvQWRtaW5Nb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBBZG1pbiA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsIFwiTmFtZSBtaXNzaW5nIVwiXSxcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGFzc3dvcmQgbWlzc2luZyFcIl0sXHJcbiAgfSxcclxuICByb2xlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICB9LFxyXG4gIHBhc3N3b3JkTGVuZ3RoOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiAwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJBZG1pblwiLCBBZG1pbik7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLElBQUlDLGlCQUFBLENBQVNDLE1BQWIsQ0FBb0I7RUFDaENDLEtBQUssRUFBRTtJQUNMQyxJQUFJLEVBQUVDLE1BREQ7SUFFTEMsUUFBUSxFQUFFLENBQUMsSUFBRCxFQUFPLGVBQVA7RUFGTCxDQUR5QjtFQUtoQ0MsUUFBUSxFQUFFO0lBQ1JILElBQUksRUFBRUMsTUFERTtJQUVSQyxRQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sbUJBQVA7RUFGRixDQUxzQjtFQVNoQ0UsSUFBSSxFQUFFO0lBQ0pKLElBQUksRUFBRUMsTUFERjtJQUVKSSxPQUFPLEVBQUU7RUFGTCxDQVQwQjtFQWFoQ0MsY0FBYyxFQUFFO0lBQ2ROLElBQUksRUFBRU8sTUFEUTtJQUVkRixPQUFPLEVBQUU7RUFGSztBQWJnQixDQUFwQixDQUFkOztlQW1CZVIsaUJBQUEsQ0FBU1csS0FBVCxDQUFlLE9BQWYsRUFBd0JaLEtBQXhCLEMifQ==