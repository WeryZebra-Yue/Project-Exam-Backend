"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = _interopRequireDefault(require("./api/controllers/admin/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  app.use("/api/v1/admin", _router.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyb3V0ZXMiLCJhcHAiLCJ1c2UiLCJhZG1pblJvdXRlciJdLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9yb3V0ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkbWluUm91dGVyIGZyb20gXCIuL2FwaS9jb250cm9sbGVycy9hZG1pbi9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVzKGFwcCkge1xuICBhcHAudXNlKFwiL2FwaS92MS9hZG1pblwiLCBhZG1pblJvdXRlcik7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0VBQ2xDQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxlQUFSLEVBQXlCQyxlQUF6QjtBQUNEIn0=