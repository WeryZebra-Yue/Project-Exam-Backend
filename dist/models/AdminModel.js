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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBZG1pbiIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0IiwicGFzc3dvcmRMZW5ndGgiLCJOdW1iZXIiLCJtb2RlbCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9tb2RlbHMvQWRtaW5Nb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IEFkbWluID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJOYW1lIG1pc3NpbmchXCJdLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGFzc3dvcmQgbWlzc2luZyFcIl0sXG4gIH0sXG4gIHJvbGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIHBhc3N3b3JkTGVuZ3RoOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJBZG1pblwiLCBBZG1pbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLEtBQUssR0FBRyxJQUFJQyxpQkFBQSxDQUFTQyxNQUFiLENBQW9CO0VBQ2hDQyxLQUFLLEVBQUU7SUFDTEMsSUFBSSxFQUFFQyxNQUREO0lBRUxDLFFBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxlQUFQO0VBRkwsQ0FEeUI7RUFLaENDLFFBQVEsRUFBRTtJQUNSSCxJQUFJLEVBQUVDLE1BREU7SUFFUkMsUUFBUSxFQUFFLENBQUMsSUFBRCxFQUFPLG1CQUFQO0VBRkYsQ0FMc0I7RUFTaENFLElBQUksRUFBRTtJQUNKSixJQUFJLEVBQUVDLE1BREY7SUFFSkksT0FBTyxFQUFFO0VBRkwsQ0FUMEI7RUFhaENDLGNBQWMsRUFBRTtJQUNkTixJQUFJLEVBQUVPLE1BRFE7SUFFZEYsT0FBTyxFQUFFO0VBRks7QUFiZ0IsQ0FBcEIsQ0FBZDs7ZUFtQmVSLGlCQUFBLENBQVNXLEtBQVQsQ0FBZSxPQUFmLEVBQXdCWixLQUF4QixDIn0=