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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhcHAiLCJFeHByZXNzIiwiRXhwcmVzc1NlcnZlciIsImNvbnN0cnVjdG9yIiwicm9vdCIsInBhdGgiLCJub3JtYWxpemUiLCJfX2Rpcm5hbWUiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsImxpbWl0IiwicHJvY2VzcyIsImVudiIsIlJFUVVFU1RfTElNSVQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJ0ZXh0Iiwic3RhdGljIiwiY29ycyIsInJvdXRlciIsInJvdXRlcyIsImxpc3RlbiIsInBvcnQiLCJQT1JUIiwid2VsY29tZSIsInAiLCJsIiwiaW5mbyIsIk5PREVfRU5WIiwib3MiLCJob3N0bmFtZSIsIm9hcyIsInRoZW4iLCJtb25nbyIsImh0dHAiLCJjcmVhdGVTZXJ2ZXIiLCJjYXRjaCIsImUiLCJlcnJvciIsImV4aXQiXSwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvY29tbW9uL3NlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcblxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCAqIGFzIG9zIGZyb20gJ29zJztcbmltcG9ydCBsIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCBvYXMgZnJvbSAnLi9zd2FnZ2VyJztcblxuXG5pbXBvcnQgbW9uZ28gZnJvbSBcIi4vbW9uZ29cIjtcblxuXG5jb25zdCBhcHAgPSBuZXcgRXhwcmVzcygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzU2VydmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHBhdGgubm9ybWFsaXplKGAke19fZGlybmFtZX0vLi4vLi5gKTtcblxuICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6IHByb2Nlc3MuZW52LlJFUVVFU1RfTElNSVQgfHwgJzEwMGtiJyB9KSk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSwgbGltaXQ6IHByb2Nlc3MuZW52LlJFUVVFU1RfTElNSVQgfHwgJzEwMGtiJyB9KSk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLnRleHQoeyBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCB8fCAnMTAwa2InfSkpO1xuXG4gICAgYXBwLnVzZShFeHByZXNzLnN0YXRpYyhgJHtyb290fS9wdWJsaWNgKSk7XG5cblxuICAgIGFwcC51c2UoY29ycygpKTtcblxuICB9XG5cbiAgcm91dGVyKHJvdXRlcykge1xuXG4gICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIGxpc3Rlbihwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCkge1xuICAgIGNvbnN0IHdlbGNvbWUgPSBwID0+ICgpID0+XG4gICAgICBsLmluZm8oXG4gICAgICAgIGB1cCBhbmQgcnVubmluZyBpbiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WIHx8XG4gICAgICAgICAgJ2RldmVsb3BtZW50J30gQDogJHtvcy5ob3N0bmFtZSgpfSBvbiBwb3J0OiAke3B9fWBcbiAgICAgICk7XG5cbiAgICBvYXMoYXBwLCB0aGlzLnJvdXRlcylcbiAgICAgIC50aGVuKCgpID0+IHtcblxuICAgICAgICBtb25nbygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGwuaW5mbyhcIkRhdGFiYXNlIExvYWRlZCFcIik7XG4gICAgICAgICAgaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKS5saXN0ZW4ocG9ydCwgd2VsY29tZShwb3J0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGwuZXJyb3IoZSk7XG4gICAgICAgIGV4aXQoMSk7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBhcHA7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOzs7Ozs7OztBQUdBLE1BQU1BLEdBQUcsR0FBRyxJQUFJQyxnQkFBSixFQUFaOztBQUVlLE1BQU1DLGFBQU4sQ0FBb0I7RUFDakNDLFdBQVcsR0FBRztJQUNaLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWdCLEdBQUVDLFNBQVUsUUFBNUIsQ0FBYjtJQUVBUCxHQUFHLENBQUNRLEdBQUosQ0FBUUMsVUFBVSxDQUFDQyxJQUFYLENBQWdCO01BQUVDLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQVosSUFBNkI7SUFBdEMsQ0FBaEIsQ0FBUjtJQUNBZCxHQUFHLENBQUNRLEdBQUosQ0FBUUMsVUFBVSxDQUFDTSxVQUFYLENBQXNCO01BQUVDLFFBQVEsRUFBRSxJQUFaO01BQWtCTCxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQUFaLElBQTZCO0lBQXRELENBQXRCLENBQVI7SUFDQWQsR0FBRyxDQUFDUSxHQUFKLENBQVFDLFVBQVUsQ0FBQ1EsSUFBWCxDQUFnQjtNQUFFTixLQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQUFaLElBQTZCO0lBQXRDLENBQWhCLENBQVI7SUFFQWQsR0FBRyxDQUFDUSxHQUFKLENBQVFQLGdCQUFBLENBQVFpQixNQUFSLENBQWdCLEdBQUVkLElBQUssU0FBdkIsQ0FBUjtJQUdBSixHQUFHLENBQUNRLEdBQUosQ0FBUSxJQUFBVyxhQUFBLEdBQVI7RUFFRDs7RUFFREMsTUFBTSxDQUFDQyxNQUFELEVBQVM7SUFFYixLQUFLQSxNQUFMLEdBQWNBLE1BQWQ7SUFDQSxPQUFPLElBQVA7RUFFRDs7RUFFREMsTUFBTSxDQUFDQyxJQUFJLEdBQUdYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVyxJQUFwQixFQUEwQjtJQUM5QixNQUFNQyxPQUFPLEdBQUdDLENBQUMsSUFBSSxNQUNuQkMsZUFBQSxDQUFFQyxJQUFGLENBQ0cscUJBQW9CaEIsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixRQUFaLElBQ25CLGFBQWMsT0FBTUMsRUFBRSxDQUFDQyxRQUFILEVBQWMsYUFBWUwsQ0FBRSxHQUZwRCxDQURGOztJQU1BLElBQUFNLGdCQUFBLEVBQUloQyxHQUFKLEVBQVMsS0FBS3FCLE1BQWQsRUFDR1ksSUFESCxDQUNRLE1BQU07TUFFVixJQUFBQyxjQUFBLElBQVFELElBQVIsQ0FBYSxNQUFNO1FBQ2pCTixlQUFBLENBQUVDLElBQUYsQ0FBTyxrQkFBUDs7UUFDQU8sSUFBSSxDQUFDQyxZQUFMLENBQWtCcEMsR0FBbEIsRUFBdUJzQixNQUF2QixDQUE4QkMsSUFBOUIsRUFBb0NFLE9BQU8sQ0FBQ0YsSUFBRCxDQUEzQztNQUNELENBSEQ7SUFLRCxDQVJILEVBU0djLEtBVEgsQ0FTVUMsQ0FBRCxJQUFPO01BQ1pYLGVBQUEsQ0FBRVksS0FBRixDQUFRRCxDQUFSOztNQUNBRSxJQUFJLENBQUMsQ0FBRCxDQUFKO0lBQ0QsQ0FaSDtJQWNBLE9BQU94QyxHQUFQO0VBQ0Q7O0FBNUNnQyJ9