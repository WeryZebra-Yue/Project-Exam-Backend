"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var path = _interopRequireWildcard(require("path"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var http = _interopRequireWildcard(require("http"));

var os = _interopRequireWildcard(require("os"));

var _logger = _interopRequireDefault(require("./logger"));

var _swagger = _interopRequireDefault(require("./swagger"));

var _mongo = _interopRequireDefault(require("./mongo"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express.default();

class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.use(bodyParser.json({
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use(bodyParser.urlencoded({
      extended: true,
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use(bodyParser.text({
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use(_express.default.static(`${root}/public`));
    app.use((0, _cors.default)());
  }

  router(routes) {
    this.routes = routes;
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () => _logger.default.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);

    (0, _swagger.default)(app, this.routes).then(() => {
      (0, _mongo.default)().then(() => {
        _logger.default.info("Database Loaded!");

        http.createServer(app).listen(port, welcome(port));
      });
    }).catch(e => {
      _logger.default.error(e);

      exit(1);
    });
    return app;
  }

}

exports.default = ExpressServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhcHAiLCJFeHByZXNzIiwiRXhwcmVzc1NlcnZlciIsImNvbnN0cnVjdG9yIiwicm9vdCIsInBhdGgiLCJub3JtYWxpemUiLCJfX2Rpcm5hbWUiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsImxpbWl0IiwicHJvY2VzcyIsImVudiIsIlJFUVVFU1RfTElNSVQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJ0ZXh0Iiwic3RhdGljIiwiY29ycyIsInJvdXRlciIsInJvdXRlcyIsImxpc3RlbiIsInBvcnQiLCJQT1JUIiwid2VsY29tZSIsInAiLCJsIiwiaW5mbyIsIk5PREVfRU5WIiwib3MiLCJob3N0bmFtZSIsIm9hcyIsInRoZW4iLCJtb25nbyIsImh0dHAiLCJjcmVhdGVTZXJ2ZXIiLCJjYXRjaCIsImUiLCJlcnJvciIsImV4aXQiXSwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvY29tbW9uL3NlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcblxyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xyXG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XHJcbmltcG9ydCBsIGZyb20gJy4vbG9nZ2VyJztcclxuaW1wb3J0IG9hcyBmcm9tICcuL3N3YWdnZXInO1xyXG5cclxuXHJcbmltcG9ydCBtb25nbyBmcm9tIFwiLi9tb25nb1wiO1xyXG5cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBFeHByZXNzKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzU2VydmVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBwYXRoLm5vcm1hbGl6ZShgJHtfX2Rpcm5hbWV9Ly4uLy4uYCk7XHJcblxyXG4gICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCB8fCAnMTAwa2InIH0pKTtcclxuICAgIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUsIGxpbWl0OiBwcm9jZXNzLmVudi5SRVFVRVNUX0xJTUlUIHx8ICcxMDBrYicgfSkpO1xyXG4gICAgYXBwLnVzZShib2R5UGFyc2VyLnRleHQoeyBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCB8fCAnMTAwa2InfSkpO1xyXG5cclxuICAgIGFwcC51c2UoRXhwcmVzcy5zdGF0aWMoYCR7cm9vdH0vcHVibGljYCkpO1xyXG5cclxuXHJcbiAgICBhcHAudXNlKGNvcnMoKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcm91dGVyKHJvdXRlcykge1xyXG5cclxuICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbGlzdGVuKHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUKSB7XHJcbiAgICBjb25zdCB3ZWxjb21lID0gcCA9PiAoKSA9PlxyXG4gICAgICBsLmluZm8oXHJcbiAgICAgICAgYHVwIGFuZCBydW5uaW5nIGluICR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHxcclxuICAgICAgICAgICdkZXZlbG9wbWVudCd9IEA6ICR7b3MuaG9zdG5hbWUoKX0gb24gcG9ydDogJHtwfX1gXHJcbiAgICAgICk7XHJcblxyXG4gICAgb2FzKGFwcCwgdGhpcy5yb3V0ZXMpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuXHJcbiAgICAgICAgbW9uZ28oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGwuaW5mbyhcIkRhdGFiYXNlIExvYWRlZCFcIik7XHJcbiAgICAgICAgICBodHRwLmNyZWF0ZVNlcnZlcihhcHApLmxpc3Rlbihwb3J0LCB3ZWxjb21lKHBvcnQpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGwuZXJyb3IoZSk7XHJcbiAgICAgICAgZXhpdCgxKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGFwcDtcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7O0FBR0EsTUFBTUEsR0FBRyxHQUFHLElBQUlDLGdCQUFKLEVBQVo7O0FBRWUsTUFBTUMsYUFBTixDQUFvQjtFQUNqQ0MsV0FBVyxHQUFHO0lBQ1osTUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZ0IsR0FBRUMsU0FBVSxRQUE1QixDQUFiO0lBRUFQLEdBQUcsQ0FBQ1EsR0FBSixDQUFRQyxVQUFVLENBQUNDLElBQVgsQ0FBZ0I7TUFBRUMsS0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsYUFBWixJQUE2QjtJQUF0QyxDQUFoQixDQUFSO0lBQ0FkLEdBQUcsQ0FBQ1EsR0FBSixDQUFRQyxVQUFVLENBQUNNLFVBQVgsQ0FBc0I7TUFBRUMsUUFBUSxFQUFFLElBQVo7TUFBa0JMLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQVosSUFBNkI7SUFBdEQsQ0FBdEIsQ0FBUjtJQUNBZCxHQUFHLENBQUNRLEdBQUosQ0FBUUMsVUFBVSxDQUFDUSxJQUFYLENBQWdCO01BQUVOLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQVosSUFBNkI7SUFBdEMsQ0FBaEIsQ0FBUjtJQUVBZCxHQUFHLENBQUNRLEdBQUosQ0FBUVAsZ0JBQUEsQ0FBUWlCLE1BQVIsQ0FBZ0IsR0FBRWQsSUFBSyxTQUF2QixDQUFSO0lBR0FKLEdBQUcsQ0FBQ1EsR0FBSixDQUFRLElBQUFXLGFBQUEsR0FBUjtFQUVEOztFQUVEQyxNQUFNLENBQUNDLE1BQUQsRUFBUztJQUViLEtBQUtBLE1BQUwsR0FBY0EsTUFBZDtJQUNBLE9BQU8sSUFBUDtFQUVEOztFQUVEQyxNQUFNLENBQUNDLElBQUksR0FBR1gsT0FBTyxDQUFDQyxHQUFSLENBQVlXLElBQXBCLEVBQTBCO0lBQzlCLE1BQU1DLE9BQU8sR0FBR0MsQ0FBQyxJQUFJLE1BQ25CQyxlQUFBLENBQUVDLElBQUYsQ0FDRyxxQkFBb0JoQixPQUFPLENBQUNDLEdBQVIsQ0FBWWdCLFFBQVosSUFDbkIsYUFBYyxPQUFNQyxFQUFFLENBQUNDLFFBQUgsRUFBYyxhQUFZTCxDQUFFLEdBRnBELENBREY7O0lBTUEsSUFBQU0sZ0JBQUEsRUFBSWhDLEdBQUosRUFBUyxLQUFLcUIsTUFBZCxFQUNHWSxJQURILENBQ1EsTUFBTTtNQUVWLElBQUFDLGNBQUEsSUFBUUQsSUFBUixDQUFhLE1BQU07UUFDakJOLGVBQUEsQ0FBRUMsSUFBRixDQUFPLGtCQUFQOztRQUNBTyxJQUFJLENBQUNDLFlBQUwsQ0FBa0JwQyxHQUFsQixFQUF1QnNCLE1BQXZCLENBQThCQyxJQUE5QixFQUFvQ0UsT0FBTyxDQUFDRixJQUFELENBQTNDO01BQ0QsQ0FIRDtJQUtELENBUkgsRUFTR2MsS0FUSCxDQVNVQyxDQUFELElBQU87TUFDWlgsZUFBQSxDQUFFWSxLQUFGLENBQVFELENBQVI7O01BQ0FFLElBQUksQ0FBQyxDQUFELENBQUo7SUFDRCxDQVpIO0lBY0EsT0FBT3hDLEdBQVA7RUFDRDs7QUE1Q2dDIn0=