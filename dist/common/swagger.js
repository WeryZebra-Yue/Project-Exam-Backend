"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = swagger;

var _swaggerExpressMiddleware = _interopRequireDefault(require("swagger-express-middleware"));

var path = _interopRequireWildcard(require("path"));

var _error = _interopRequireDefault(require("../api/middlewares/error.handler"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function swagger(app, routes) {
  return new Promise((resolve, reject) => {
    (0, _swaggerExpressMiddleware.default)(path.join(__dirname, 'api.yml'), app, (err, mw) => {
      if (err) {
        return reject(err);
      } // Enable Express' case-sensitive and strict options
      // (so "/entities", "/Entities", and "/Entities/" are all different)


      app.enable('case sensitive routing');
      app.enable('strict routing');
      app.use(mw.metadata());
      app.use(mw.files({
        // Override the Express App's case-sensitive 
        // and strict-routing settings for the Files middleware.
        caseSensitive: false,
        strict: false
      }, {
        useBasePath: false,
        apiPath: process.env.SWAGGER_API_SPEC // Disable serving the "api.yml" file
        // rawFilesPath: false

      }));
      app.use(mw.parseRequest({
        // Configure the cookie parser to use secure cookies
        cookie: {
          secret: process.env.SESSION_SECRET
        },
        // Don't allow JSON content over 100kb (default is 1mb)
        json: {
          limit: process.env.REQUEST_LIMIT
        }
      })); // These two middleware don't have any options (yet)

      app.use(mw.CORS(), mw.validateRequest());
      routes(app); // eslint-disable-next-line no-unused-vars, no-shadow

      app.use(_error.default);
      return resolve();
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzd2FnZ2VyIiwiYXBwIiwicm91dGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtaWRkbGV3YXJlIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJlcnIiLCJtdyIsImVuYWJsZSIsInVzZSIsIm1ldGFkYXRhIiwiZmlsZXMiLCJjYXNlU2Vuc2l0aXZlIiwic3RyaWN0IiwidXNlQmFzZVBhdGgiLCJhcGlQYXRoIiwicHJvY2VzcyIsImVudiIsIlNXQUdHRVJfQVBJX1NQRUMiLCJwYXJzZVJlcXVlc3QiLCJjb29raWUiLCJzZWNyZXQiLCJTRVNTSU9OX1NFQ1JFVCIsImpzb24iLCJsaW1pdCIsIlJFUVVFU1RfTElNSVQiLCJDT1JTIiwidmFsaWRhdGVSZXF1ZXN0IiwiZXJyb3JIYW5kbGVyIl0sInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL2NvbW1vbi9zd2FnZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkbGV3YXJlIGZyb20gJ3N3YWdnZXItZXhwcmVzcy1taWRkbGV3YXJlJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tICcuLi9hcGkvbWlkZGxld2FyZXMvZXJyb3IuaGFuZGxlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzd2FnZ2VyKGFwcCwgcm91dGVzKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIG1pZGRsZXdhcmUocGF0aC5qb2luKF9fZGlybmFtZSwgJ2FwaS55bWwnKSwgYXBwLCAoZXJyLCBtdykgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEVuYWJsZSBFeHByZXNzJyBjYXNlLXNlbnNpdGl2ZSBhbmQgc3RyaWN0IG9wdGlvbnNcclxuICAgICAgLy8gKHNvIFwiL2VudGl0aWVzXCIsIFwiL0VudGl0aWVzXCIsIGFuZCBcIi9FbnRpdGllcy9cIiBhcmUgYWxsIGRpZmZlcmVudClcclxuICAgICAgYXBwLmVuYWJsZSgnY2FzZSBzZW5zaXRpdmUgcm91dGluZycpO1xyXG4gICAgICBhcHAuZW5hYmxlKCdzdHJpY3Qgcm91dGluZycpO1xyXG5cclxuICAgICAgYXBwLnVzZShtdy5tZXRhZGF0YSgpKTtcclxuICAgICAgYXBwLnVzZShtdy5maWxlcyh7XHJcbiAgICAgICAgLy8gT3ZlcnJpZGUgdGhlIEV4cHJlc3MgQXBwJ3MgY2FzZS1zZW5zaXRpdmUgXHJcbiAgICAgICAgLy8gYW5kIHN0cmljdC1yb3V0aW5nIHNldHRpbmdzIGZvciB0aGUgRmlsZXMgbWlkZGxld2FyZS5cclxuICAgICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcclxuICAgICAgICBzdHJpY3Q6IGZhbHNlLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdXNlQmFzZVBhdGg6IGZhbHNlLFxyXG4gICAgICAgIGFwaVBhdGg6IHByb2Nlc3MuZW52LlNXQUdHRVJfQVBJX1NQRUMsXHJcbiAgICAgICAgLy8gRGlzYWJsZSBzZXJ2aW5nIHRoZSBcImFwaS55bWxcIiBmaWxlXHJcbiAgICAgICAgLy8gcmF3RmlsZXNQYXRoOiBmYWxzZVxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgICBhcHAudXNlKG13LnBhcnNlUmVxdWVzdCh7XHJcbiAgICAgICAgLy8gQ29uZmlndXJlIHRoZSBjb29raWUgcGFyc2VyIHRvIHVzZSBzZWN1cmUgY29va2llc1xyXG4gICAgICAgIGNvb2tpZToge1xyXG4gICAgICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIERvbid0IGFsbG93IEpTT04gY29udGVudCBvdmVyIDEwMGtiIChkZWZhdWx0IGlzIDFtYilcclxuICAgICAgICBqc29uOiB7XHJcbiAgICAgICAgICBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgICAvLyBUaGVzZSB0d28gbWlkZGxld2FyZSBkb24ndCBoYXZlIGFueSBvcHRpb25zICh5ZXQpXHJcbiAgICAgIGFwcC51c2UoXHJcbiAgICAgICAgbXcuQ09SUygpLFxyXG4gICAgICAgIG13LnZhbGlkYXRlUmVxdWVzdCgpKTtcclxuXHJcbiAgICAgIHJvdXRlcyhhcHApO1xyXG5cclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzLCBuby1zaGFkb3dcclxuICAgICAgYXBwLnVzZShlcnJvckhhbmRsZXIpO1xyXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLE1BQXRCLEVBQThCO0VBQzNDLE9BQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtJQUN0QyxJQUFBQyxpQ0FBQSxFQUFXQyxJQUFJLENBQUNDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixTQUFyQixDQUFYLEVBQTRDUixHQUE1QyxFQUFpRCxDQUFDUyxHQUFELEVBQU1DLEVBQU4sS0FBYTtNQUM1RCxJQUFJRCxHQUFKLEVBQVM7UUFDUCxPQUFPTCxNQUFNLENBQUNLLEdBQUQsQ0FBYjtNQUNELENBSDJELENBSTVEO01BQ0E7OztNQUNBVCxHQUFHLENBQUNXLE1BQUosQ0FBVyx3QkFBWDtNQUNBWCxHQUFHLENBQUNXLE1BQUosQ0FBVyxnQkFBWDtNQUVBWCxHQUFHLENBQUNZLEdBQUosQ0FBUUYsRUFBRSxDQUFDRyxRQUFILEVBQVI7TUFDQWIsR0FBRyxDQUFDWSxHQUFKLENBQVFGLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTO1FBQ2Y7UUFDQTtRQUNBQyxhQUFhLEVBQUUsS0FIQTtRQUlmQyxNQUFNLEVBQUU7TUFKTyxDQUFULEVBS0w7UUFDREMsV0FBVyxFQUFFLEtBRFo7UUFFREMsT0FBTyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRnBCLENBR0Q7UUFDQTs7TUFKQyxDQUxLLENBQVI7TUFZQXJCLEdBQUcsQ0FBQ1ksR0FBSixDQUFRRixFQUFFLENBQUNZLFlBQUgsQ0FBZ0I7UUFDdEI7UUFDQUMsTUFBTSxFQUFFO1VBQ05DLE1BQU0sRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLO1FBRGQsQ0FGYztRQUt0QjtRQUNBQyxJQUFJLEVBQUU7VUFDSkMsS0FBSyxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVE7UUFEZjtNQU5nQixDQUFoQixDQUFSLEVBdEI0RCxDQWlDNUQ7O01BQ0E1QixHQUFHLENBQUNZLEdBQUosQ0FDRUYsRUFBRSxDQUFDbUIsSUFBSCxFQURGLEVBRUVuQixFQUFFLENBQUNvQixlQUFILEVBRkY7TUFJQTdCLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBdEM0RCxDQXdDNUQ7O01BQ0FBLEdBQUcsQ0FBQ1ksR0FBSixDQUFRbUIsY0FBUjtNQUNBLE9BQU81QixPQUFPLEVBQWQ7SUFDRCxDQTNDRDtFQTRDRCxDQTdDTSxDQUFQO0FBOENEIn0=