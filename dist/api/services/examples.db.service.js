"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ExamplesDatabase {
  constructor() {
    this._data = [];
    this._counter = 0;
    this.insert('example 0');
    this.insert('example 1');
  }

  all() {
    return Promise.resolve(this._data);
  }

  byId(id) {
    return Promise.resolve(this._data[id]);
  }

  insert(name) {
    const record = {
      id: this._counter,
      name
    };
    this._counter += 1;

    this._data.push(record);

    return Promise.resolve(record);
  }

}

var _default = new ExamplesDatabase();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFeGFtcGxlc0RhdGFiYXNlIiwiY29uc3RydWN0b3IiLCJfZGF0YSIsIl9jb3VudGVyIiwiaW5zZXJ0IiwiYWxsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJieUlkIiwiaWQiLCJuYW1lIiwicmVjb3JkIiwicHVzaCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvc2VydmljZXMvZXhhbXBsZXMuZGIuc2VydmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlc0RhdGFiYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHRoaXMuX2NvdW50ZXIgPSAwO1xuXG4gICAgdGhpcy5pbnNlcnQoJ2V4YW1wbGUgMCcpO1xuICAgIHRoaXMuaW5zZXJ0KCdleGFtcGxlIDEnKTtcbiAgfVxuXG4gIGFsbCgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgYnlJZChpZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fZGF0YVtpZF0pO1xuICB9XG5cbiAgaW5zZXJ0KG5hbWUpIHtcbiAgICBjb25zdCByZWNvcmQgPSB7XG4gICAgICBpZDogdGhpcy5fY291bnRlcixcbiAgICAgIG5hbWUsXG4gICAgfTtcblxuICAgIHRoaXMuX2NvdW50ZXIgKz0gMTtcbiAgICB0aGlzLl9kYXRhLnB1c2gocmVjb3JkKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVjb3JkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRXhhbXBsZXNEYXRhYmFzZSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsZ0JBQU4sQ0FBdUI7RUFDckJDLFdBQVcsR0FBRztJQUNaLEtBQUtDLEtBQUwsR0FBYSxFQUFiO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixDQUFoQjtJQUVBLEtBQUtDLE1BQUwsQ0FBWSxXQUFaO0lBQ0EsS0FBS0EsTUFBTCxDQUFZLFdBQVo7RUFDRDs7RUFFREMsR0FBRyxHQUFHO0lBQ0osT0FBT0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtMLEtBQXJCLENBQVA7RUFDRDs7RUFFRE0sSUFBSSxDQUFDQyxFQUFELEVBQUs7SUFDUCxPQUFPSCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0wsS0FBTCxDQUFXTyxFQUFYLENBQWhCLENBQVA7RUFDRDs7RUFFREwsTUFBTSxDQUFDTSxJQUFELEVBQU87SUFDWCxNQUFNQyxNQUFNLEdBQUc7TUFDYkYsRUFBRSxFQUFFLEtBQUtOLFFBREk7TUFFYk87SUFGYSxDQUFmO0lBS0EsS0FBS1AsUUFBTCxJQUFpQixDQUFqQjs7SUFDQSxLQUFLRCxLQUFMLENBQVdVLElBQVgsQ0FBZ0JELE1BQWhCOztJQUVBLE9BQU9MLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkksTUFBaEIsQ0FBUDtFQUNEOztBQTNCb0I7O2VBOEJSLElBQUlYLGdCQUFKLEUifQ==