"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = new _mongoose.default.Schema({
  SON: {
    type: Number
  },
  SOP: {
    type: Number
  },
  SON: {
    type: Number
  },
  SOE: {
    type: Number
  },
  SLM: {
    type: Number
  }
});

var _default = _mongoose.default.model("User", User);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVc2VyIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJTT04iLCJ0eXBlIiwiTnVtYmVyIiwiU09QIiwiU09FIiwiU0xNIiwibW9kZWwiXSwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvbW9kZWxzL0NvdW50TW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VyID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIFNPTjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgfSxcbiAgU09QOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICB9LFxuICBTT046IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gIH0sXG4gIFNPRToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgfSxcbiAgU0xNOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLElBQUlDLGlCQUFBLENBQVNDLE1BQWIsQ0FBb0I7RUFDL0JDLEdBQUcsRUFBRTtJQUNIQyxJQUFJLEVBQUVDO0VBREgsQ0FEMEI7RUFJL0JDLEdBQUcsRUFBRTtJQUNIRixJQUFJLEVBQUVDO0VBREgsQ0FKMEI7RUFPL0JGLEdBQUcsRUFBRTtJQUNIQyxJQUFJLEVBQUVDO0VBREgsQ0FQMEI7RUFVL0JFLEdBQUcsRUFBRTtJQUNISCxJQUFJLEVBQUVDO0VBREgsQ0FWMEI7RUFhL0JHLEdBQUcsRUFBRTtJQUNISixJQUFJLEVBQUVDO0VBREg7QUFiMEIsQ0FBcEIsQ0FBYjs7ZUFrQmVKLGlCQUFBLENBQVNRLEtBQVQsQ0FBZSxNQUFmLEVBQXVCVCxJQUF2QixDIn0=