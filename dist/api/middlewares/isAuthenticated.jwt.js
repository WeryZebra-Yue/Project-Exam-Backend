"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAuthenticated;

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line no-unused-vars, no-shadow
async function isAuthenticated(req, res, next) {
  let token = req.headers.authorization;
  if (!token) res.status(401).json({
    message: "Token missing"
  });else {
    try {
      token = token.split(" ")[1];
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({
        message: err.message || "Invalid Token"
      });
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc0F1dGhlbnRpY2F0ZWQiLCJyZXEiLCJyZXMiLCJuZXh0IiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwic3BsaXQiLCJ1c2VyIiwiand0IiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJlcnIiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL21pZGRsZXdhcmVzL2lzQXV0aGVudGljYXRlZC5qd3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzLCBuby1zaGFkb3dcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZChyZXEsIHJlcywgbmV4dCkge1xuICBsZXQgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICBpZiAoIXRva2VuKSByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiVG9rZW4gbWlzc2luZ1wiIH0pO1xuICBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgdG9rZW4gPSB0b2tlbi5zcGxpdChcIiBcIilbMV07XG4gICAgICBjb25zdCB1c2VyID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XG4gICAgICByZXEudXNlciA9IHVzZXI7XG4gICAgICBuZXh0KCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIHx8IFwiSW52YWxpZCBUb2tlblwiIH0pO1xuICAgIH1cbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQTtBQUNlLGVBQWVBLGVBQWYsQ0FBK0JDLEdBQS9CLEVBQW9DQyxHQUFwQyxFQUF5Q0MsSUFBekMsRUFBK0M7RUFDNUQsSUFBSUMsS0FBSyxHQUFHSCxHQUFHLENBQUNJLE9BQUosQ0FBWUMsYUFBeEI7RUFDQSxJQUFJLENBQUNGLEtBQUwsRUFBWUYsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7SUFBRUMsT0FBTyxFQUFFO0VBQVgsQ0FBckIsRUFBWixLQUNLO0lBQ0gsSUFBSTtNQUNGTCxLQUFLLEdBQUdBLEtBQUssQ0FBQ00sS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBUjtNQUNBLE1BQU1DLElBQUksR0FBR0MsR0FBRyxDQUFDQyxNQUFKLENBQVdULEtBQVgsRUFBa0JVLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUE5QixDQUFiO01BQ0FmLEdBQUcsQ0FBQ1UsSUFBSixHQUFXQSxJQUFYO01BQ0FSLElBQUk7SUFDTCxDQUxELENBS0UsT0FBT2MsR0FBUCxFQUFZO01BQ1pmLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO1FBQUVDLE9BQU8sRUFBRVEsR0FBRyxDQUFDUixPQUFKLElBQWU7TUFBMUIsQ0FBckI7SUFDRDtFQUNGO0FBQ0YifQ==