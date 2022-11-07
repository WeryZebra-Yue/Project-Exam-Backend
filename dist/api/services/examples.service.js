"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("../../common/logger"));

var _examplesDb = _interopRequireDefault(require("./examples.db.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExamplesService {
  all() {
    _logger.default.info(`${this.constructor.name}.all()`);

    return _examplesDb.default.all();
  }

  byId(id) {
    _logger.default.info(`${this.constructor.name}.byId(${id})`);

    return _examplesDb.default.byId(id);
  }

  create(name) {
    return _examplesDb.default.insert(name);
  }

}

var _default = new ExamplesService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFeGFtcGxlc1NlcnZpY2UiLCJhbGwiLCJsIiwiaW5mbyIsImNvbnN0cnVjdG9yIiwibmFtZSIsImRiIiwiYnlJZCIsImlkIiwiY3JlYXRlIiwiaW5zZXJ0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9zZXJ2aWNlcy9leGFtcGxlcy5zZXJ2aWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsIGZyb20gJy4uLy4uL2NvbW1vbi9sb2dnZXInO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi9leGFtcGxlcy5kYi5zZXJ2aWNlJztcclxuXHJcbmNsYXNzIEV4YW1wbGVzU2VydmljZSB7XHJcbiAgYWxsKCkge1xyXG4gICAgbC5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0uYWxsKClgKTtcclxuICAgIHJldHVybiBkYi5hbGwoKTtcclxuICB9XHJcblxyXG4gIGJ5SWQoaWQpIHtcclxuICAgIGwuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmJ5SWQoJHtpZH0pYCk7XHJcbiAgICByZXR1cm4gZGIuYnlJZChpZCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobmFtZSkge1xyXG4gICAgcmV0dXJuIGRiLmluc2VydChuYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBFeGFtcGxlc1NlcnZpY2UoKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxlQUFOLENBQXNCO0VBQ3BCQyxHQUFHLEdBQUc7SUFDSkMsZUFBQSxDQUFFQyxJQUFGLENBQVEsR0FBRSxLQUFLQyxXQUFMLENBQWlCQyxJQUFLLFFBQWhDOztJQUNBLE9BQU9DLG1CQUFBLENBQUdMLEdBQUgsRUFBUDtFQUNEOztFQUVETSxJQUFJLENBQUNDLEVBQUQsRUFBSztJQUNQTixlQUFBLENBQUVDLElBQUYsQ0FBUSxHQUFFLEtBQUtDLFdBQUwsQ0FBaUJDLElBQUssU0FBUUcsRUFBRyxHQUEzQzs7SUFDQSxPQUFPRixtQkFBQSxDQUFHQyxJQUFILENBQVFDLEVBQVIsQ0FBUDtFQUNEOztFQUVEQyxNQUFNLENBQUNKLElBQUQsRUFBTztJQUNYLE9BQU9DLG1CQUFBLENBQUdJLE1BQUgsQ0FBVUwsSUFBVixDQUFQO0VBQ0Q7O0FBYm1COztlQWdCUCxJQUFJTCxlQUFKLEUifQ==