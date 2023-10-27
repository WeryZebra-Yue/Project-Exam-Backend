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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFeGFtcGxlc1NlcnZpY2UiLCJhbGwiLCJsIiwiaW5mbyIsImNvbnN0cnVjdG9yIiwibmFtZSIsImRiIiwiYnlJZCIsImlkIiwiY3JlYXRlIiwiaW5zZXJ0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9zZXJ2aWNlcy9leGFtcGxlcy5zZXJ2aWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsIGZyb20gJy4uLy4uL2NvbW1vbi9sb2dnZXInO1xuaW1wb3J0IGRiIGZyb20gJy4vZXhhbXBsZXMuZGIuc2VydmljZSc7XG5cbmNsYXNzIEV4YW1wbGVzU2VydmljZSB7XG4gIGFsbCgpIHtcbiAgICBsLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5hbGwoKWApO1xuICAgIHJldHVybiBkYi5hbGwoKTtcbiAgfVxuXG4gIGJ5SWQoaWQpIHtcbiAgICBsLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5ieUlkKCR7aWR9KWApO1xuICAgIHJldHVybiBkYi5ieUlkKGlkKTtcbiAgfVxuXG4gIGNyZWF0ZShuYW1lKSB7XG4gICAgcmV0dXJuIGRiLmluc2VydChuYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRXhhbXBsZXNTZXJ2aWNlKCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLE1BQU1BLGVBQU4sQ0FBc0I7RUFDcEJDLEdBQUcsR0FBRztJQUNKQyxlQUFBLENBQUVDLElBQUYsQ0FBUSxHQUFFLEtBQUtDLFdBQUwsQ0FBaUJDLElBQUssUUFBaEM7O0lBQ0EsT0FBT0MsbUJBQUEsQ0FBR0wsR0FBSCxFQUFQO0VBQ0Q7O0VBRURNLElBQUksQ0FBQ0MsRUFBRCxFQUFLO0lBQ1BOLGVBQUEsQ0FBRUMsSUFBRixDQUFRLEdBQUUsS0FBS0MsV0FBTCxDQUFpQkMsSUFBSyxTQUFRRyxFQUFHLEdBQTNDOztJQUNBLE9BQU9GLG1CQUFBLENBQUdDLElBQUgsQ0FBUUMsRUFBUixDQUFQO0VBQ0Q7O0VBRURDLE1BQU0sQ0FBQ0osSUFBRCxFQUFPO0lBQ1gsT0FBT0MsbUJBQUEsQ0FBR0ksTUFBSCxDQUFVTCxJQUFWLENBQVA7RUFDRDs7QUFibUI7O2VBZ0JQLElBQUlMLGVBQUosRSJ9