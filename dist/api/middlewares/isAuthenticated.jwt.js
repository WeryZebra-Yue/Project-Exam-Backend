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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc0F1dGhlbnRpY2F0ZWQiLCJyZXEiLCJyZXMiLCJuZXh0IiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwic3BsaXQiLCJ1c2VyIiwiand0IiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJlcnIiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL21pZGRsZXdhcmVzL2lzQXV0aGVudGljYXRlZC5qd3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgbm8tc2hhZG93XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZChyZXEsIHJlcywgbmV4dCkge1xyXG4gIGxldCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgaWYgKCF0b2tlbikgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIlRva2VuIG1pc3NpbmdcIiB9KTtcclxuICBlbHNlIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRva2VuID0gdG9rZW4uc3BsaXQoXCIgXCIpWzFdO1xyXG4gICAgICBjb25zdCB1c2VyID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XHJcbiAgICAgIHJlcS51c2VyID0gdXNlcjtcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfHwgXCJJbnZhbGlkIFRva2VuXCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBO0FBQ2UsZUFBZUEsZUFBZixDQUErQkMsR0FBL0IsRUFBb0NDLEdBQXBDLEVBQXlDQyxJQUF6QyxFQUErQztFQUM1RCxJQUFJQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0ksT0FBSixDQUFZQyxhQUF4QjtFQUNBLElBQUksQ0FBQ0YsS0FBTCxFQUFZRixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtJQUFFQyxPQUFPLEVBQUU7RUFBWCxDQUFyQixFQUFaLEtBQ0s7SUFDSCxJQUFJO01BQ0ZMLEtBQUssR0FBR0EsS0FBSyxDQUFDTSxLQUFOLENBQVksR0FBWixFQUFpQixDQUFqQixDQUFSO01BQ0EsTUFBTUMsSUFBSSxHQUFHQyxHQUFHLENBQUNDLE1BQUosQ0FBV1QsS0FBWCxFQUFrQlUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQTlCLENBQWI7TUFDQWYsR0FBRyxDQUFDVSxJQUFKLEdBQVdBLElBQVg7TUFDQVIsSUFBSTtJQUNMLENBTEQsQ0FLRSxPQUFPYyxHQUFQLEVBQVk7TUFDWmYsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7UUFBRUMsT0FBTyxFQUFFUSxHQUFHLENBQUNSLE9BQUosSUFBZTtNQUExQixDQUFyQjtJQUNEO0VBQ0Y7QUFDRiJ9