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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzd2FnZ2VyIiwiYXBwIiwicm91dGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtaWRkbGV3YXJlIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJlcnIiLCJtdyIsImVuYWJsZSIsInVzZSIsIm1ldGFkYXRhIiwiZmlsZXMiLCJjYXNlU2Vuc2l0aXZlIiwic3RyaWN0IiwidXNlQmFzZVBhdGgiLCJhcGlQYXRoIiwicHJvY2VzcyIsImVudiIsIlNXQUdHRVJfQVBJX1NQRUMiLCJwYXJzZVJlcXVlc3QiLCJjb29raWUiLCJzZWNyZXQiLCJTRVNTSU9OX1NFQ1JFVCIsImpzb24iLCJsaW1pdCIsIlJFUVVFU1RfTElNSVQiLCJDT1JTIiwidmFsaWRhdGVSZXF1ZXN0IiwiZXJyb3JIYW5kbGVyIl0sInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL2NvbW1vbi9zd2FnZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkbGV3YXJlIGZyb20gJ3N3YWdnZXItZXhwcmVzcy1taWRkbGV3YXJlJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4uL2FwaS9taWRkbGV3YXJlcy9lcnJvci5oYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3dhZ2dlcihhcHAsIHJvdXRlcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG1pZGRsZXdhcmUocGF0aC5qb2luKF9fZGlybmFtZSwgJ2FwaS55bWwnKSwgYXBwLCAoZXJyLCBtdykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgICAvLyBFbmFibGUgRXhwcmVzcycgY2FzZS1zZW5zaXRpdmUgYW5kIHN0cmljdCBvcHRpb25zXG4gICAgICAvLyAoc28gXCIvZW50aXRpZXNcIiwgXCIvRW50aXRpZXNcIiwgYW5kIFwiL0VudGl0aWVzL1wiIGFyZSBhbGwgZGlmZmVyZW50KVxuICAgICAgYXBwLmVuYWJsZSgnY2FzZSBzZW5zaXRpdmUgcm91dGluZycpO1xuICAgICAgYXBwLmVuYWJsZSgnc3RyaWN0IHJvdXRpbmcnKTtcblxuICAgICAgYXBwLnVzZShtdy5tZXRhZGF0YSgpKTtcbiAgICAgIGFwcC51c2UobXcuZmlsZXMoe1xuICAgICAgICAvLyBPdmVycmlkZSB0aGUgRXhwcmVzcyBBcHAncyBjYXNlLXNlbnNpdGl2ZSBcbiAgICAgICAgLy8gYW5kIHN0cmljdC1yb3V0aW5nIHNldHRpbmdzIGZvciB0aGUgRmlsZXMgbWlkZGxld2FyZS5cbiAgICAgICAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgIHN0cmljdDogZmFsc2UsXG4gICAgICB9LCB7XG4gICAgICAgIHVzZUJhc2VQYXRoOiBmYWxzZSxcbiAgICAgICAgYXBpUGF0aDogcHJvY2Vzcy5lbnYuU1dBR0dFUl9BUElfU1BFQyxcbiAgICAgICAgLy8gRGlzYWJsZSBzZXJ2aW5nIHRoZSBcImFwaS55bWxcIiBmaWxlXG4gICAgICAgIC8vIHJhd0ZpbGVzUGF0aDogZmFsc2VcbiAgICAgIH0pKTtcblxuICAgICAgYXBwLnVzZShtdy5wYXJzZVJlcXVlc3Qoe1xuICAgICAgICAvLyBDb25maWd1cmUgdGhlIGNvb2tpZSBwYXJzZXIgdG8gdXNlIHNlY3VyZSBjb29raWVzXG4gICAgICAgIGNvb2tpZToge1xuICAgICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIERvbid0IGFsbG93IEpTT04gY29udGVudCBvdmVyIDEwMGtiIChkZWZhdWx0IGlzIDFtYilcbiAgICAgICAganNvbjoge1xuICAgICAgICAgIGxpbWl0OiBwcm9jZXNzLmVudi5SRVFVRVNUX0xJTUlULFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuXG4gICAgICAvLyBUaGVzZSB0d28gbWlkZGxld2FyZSBkb24ndCBoYXZlIGFueSBvcHRpb25zICh5ZXQpXG4gICAgICBhcHAudXNlKFxuICAgICAgICBtdy5DT1JTKCksXG4gICAgICAgIG13LnZhbGlkYXRlUmVxdWVzdCgpKTtcblxuICAgICAgcm91dGVzKGFwcCk7XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgbm8tc2hhZG93XG4gICAgICBhcHAudXNlKGVycm9ySGFuZGxlcik7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxNQUF0QixFQUE4QjtFQUMzQyxPQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7SUFDdEMsSUFBQUMsaUNBQUEsRUFBV0MsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsU0FBckIsQ0FBWCxFQUE0Q1IsR0FBNUMsRUFBaUQsQ0FBQ1MsR0FBRCxFQUFNQyxFQUFOLEtBQWE7TUFDNUQsSUFBSUQsR0FBSixFQUFTO1FBQ1AsT0FBT0wsTUFBTSxDQUFDSyxHQUFELENBQWI7TUFDRCxDQUgyRCxDQUk1RDtNQUNBOzs7TUFDQVQsR0FBRyxDQUFDVyxNQUFKLENBQVcsd0JBQVg7TUFDQVgsR0FBRyxDQUFDVyxNQUFKLENBQVcsZ0JBQVg7TUFFQVgsR0FBRyxDQUFDWSxHQUFKLENBQVFGLEVBQUUsQ0FBQ0csUUFBSCxFQUFSO01BQ0FiLEdBQUcsQ0FBQ1ksR0FBSixDQUFRRixFQUFFLENBQUNJLEtBQUgsQ0FBUztRQUNmO1FBQ0E7UUFDQUMsYUFBYSxFQUFFLEtBSEE7UUFJZkMsTUFBTSxFQUFFO01BSk8sQ0FBVCxFQUtMO1FBQ0RDLFdBQVcsRUFBRSxLQURaO1FBRURDLE9BQU8sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQUZwQixDQUdEO1FBQ0E7O01BSkMsQ0FMSyxDQUFSO01BWUFyQixHQUFHLENBQUNZLEdBQUosQ0FBUUYsRUFBRSxDQUFDWSxZQUFILENBQWdCO1FBQ3RCO1FBQ0FDLE1BQU0sRUFBRTtVQUNOQyxNQUFNLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSztRQURkLENBRmM7UUFLdEI7UUFDQUMsSUFBSSxFQUFFO1VBQ0pDLEtBQUssRUFBRVIsT0FBTyxDQUFDQyxHQUFSLENBQVlRO1FBRGY7TUFOZ0IsQ0FBaEIsQ0FBUixFQXRCNEQsQ0FpQzVEOztNQUNBNUIsR0FBRyxDQUFDWSxHQUFKLENBQ0VGLEVBQUUsQ0FBQ21CLElBQUgsRUFERixFQUVFbkIsRUFBRSxDQUFDb0IsZUFBSCxFQUZGO01BSUE3QixNQUFNLENBQUNELEdBQUQsQ0FBTixDQXRDNEQsQ0F3QzVEOztNQUNBQSxHQUFHLENBQUNZLEdBQUosQ0FBUW1CLGNBQVI7TUFDQSxPQUFPNUIsT0FBTyxFQUFkO0lBQ0QsQ0EzQ0Q7RUE0Q0QsQ0E3Q00sQ0FBUDtBQThDRCJ9