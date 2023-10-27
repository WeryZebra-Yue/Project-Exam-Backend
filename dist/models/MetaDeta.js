"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MetaDeta = new _mongoose.default.Schema({
  unique: {
    type: String
  },
  lastUpdated: {
    type: Date
  }
});

var _default = _mongoose.default.model("MetaDeta", MetaDeta);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNZXRhRGV0YSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidW5pcXVlIiwidHlwZSIsIlN0cmluZyIsImxhc3RVcGRhdGVkIiwiRGF0ZSIsIm1vZGVsIl0sInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL21vZGVscy9NZXRhRGV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1ldGFEZXRhID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVuaXF1ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgfSxcbiAgbGFzdFVwZGF0ZWQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiTWV0YURldGFcIiwgTWV0YURldGEpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsSUFBSUMsaUJBQUEsQ0FBU0MsTUFBYixDQUFvQjtFQUNuQ0MsTUFBTSxFQUFFO0lBQ05DLElBQUksRUFBRUM7RUFEQSxDQUQyQjtFQUluQ0MsV0FBVyxFQUFFO0lBQ1hGLElBQUksRUFBRUc7RUFESztBQUpzQixDQUFwQixDQUFqQjs7ZUFTZU4saUJBQUEsQ0FBU08sS0FBVCxDQUFlLFVBQWYsRUFBMkJSLFFBQTNCLEMifQ==