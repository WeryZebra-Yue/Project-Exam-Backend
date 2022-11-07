"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class AuthenticationService {
  /**
   * Generate the JWT Token for the user
   * @param {String} id - ID of the user
   */
  generateToken(id, role, admin) {
    const today = new Date();
    const exp = new Date(today); // add 24 hours to current date date

    exp.setDate(today.getDate() + 1);
    console.log(id, role, admin);
    console.log(exp);
    return jwt.sign({
      id: id,
      role: role,
      admin: admin
    }, process.env.JWT_SECRET);
  } // decrypt password


  async verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return reject(err);
        console.log(payload);
        resolve(payload);
      });
    });
  }

  decryptPassword(password, hash) {
    return _bcrypt.default.compare(password, hash);
  }

  encryptPassword(password) {
    return _bcrypt.default.hash(password, 10);
  } // encrypt password
  // async verifyAdmin(token) {
  //   const payload = await this.verifyToken(token);
  //   const user = await Admin.findById(payload.id)
  //     .select("-password")
  //     .lean()
  //     .exec();
  //   if (!user) throw new Error("User not found");
  //   return user;
  // }


}

var _default = new AuthenticationService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvblNlcnZpY2UiLCJnZW5lcmF0ZVRva2VuIiwiaWQiLCJyb2xlIiwiYWRtaW4iLCJ0b2RheSIsIkRhdGUiLCJleHAiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJqd3QiLCJzaWduIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJ2ZXJpZnlUb2tlbiIsInRva2VuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ2ZXJpZnkiLCJlcnIiLCJwYXlsb2FkIiwiZGVjcnlwdFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoIiwiYmNyeXB0IiwiY29tcGFyZSIsImVuY3J5cHRQYXNzd29yZCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcclxuY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuICAvKipcclxuICAgKiBHZW5lcmF0ZSB0aGUgSldUIFRva2VuIGZvciB0aGUgdXNlclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIElEIG9mIHRoZSB1c2VyXHJcbiAgICovXHJcbiAgZ2VuZXJhdGVUb2tlbihpZCwgcm9sZSwgYWRtaW4pIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGV4cCA9IG5ldyBEYXRlKHRvZGF5KTtcclxuICAgIC8vIGFkZCAyNCBob3VycyB0byBjdXJyZW50IGRhdGUgZGF0ZVxyXG4gICAgZXhwLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICBjb25zb2xlLmxvZyhpZCwgcm9sZSwgYWRtaW4pO1xyXG4gICAgY29uc29sZS5sb2coZXhwKTtcclxuXHJcbiAgICByZXR1cm4gand0LnNpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgcm9sZTogcm9sZSxcclxuICAgICAgICBhZG1pbjogYWRtaW4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRcclxuICAgICk7XHJcbiAgfVxyXG4gIC8vIGRlY3J5cHQgcGFzc3dvcmRcclxuICBhc3luYyB2ZXJpZnlUb2tlbih0b2tlbikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgKGVyciwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICAgICAgICByZXNvbHZlKHBheWxvYWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWNyeXB0UGFzc3dvcmQocGFzc3dvcmQsIGhhc2gpIHtcclxuICAgIHJldHVybiBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgaGFzaCk7XHJcbiAgfVxyXG5cclxuICBlbmNyeXB0UGFzc3dvcmQocGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5jcnlwdCBwYXNzd29yZFxyXG4gIC8vIGFzeW5jIHZlcmlmeUFkbWluKHRva2VuKSB7XHJcbiAgLy8gICBjb25zdCBwYXlsb2FkID0gYXdhaXQgdGhpcy52ZXJpZnlUb2tlbih0b2tlbik7XHJcbiAgLy8gICBjb25zdCB1c2VyID0gYXdhaXQgQWRtaW4uZmluZEJ5SWQocGF5bG9hZC5pZClcclxuICAvLyAgICAgLnNlbGVjdChcIi1wYXNzd29yZFwiKVxyXG4gIC8vICAgICAubGVhbigpXHJcbiAgLy8gICAgIC5leGVjKCk7XHJcbiAgLy8gICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpO1xyXG4gIC8vICAgcmV0dXJuIHVzZXI7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aGVudGljYXRpb25TZXJ2aWNlKCk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQUNBLE1BQU1BLHFCQUFOLENBQTRCO0VBQzFCO0FBQ0Y7QUFDQTtBQUNBO0VBQ0VDLGFBQWEsQ0FBQ0MsRUFBRCxFQUFLQyxJQUFMLEVBQVdDLEtBQVgsRUFBa0I7SUFDN0IsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBZDtJQUNBLE1BQU1DLEdBQUcsR0FBRyxJQUFJRCxJQUFKLENBQVNELEtBQVQsQ0FBWixDQUY2QixDQUc3Qjs7SUFDQUUsR0FBRyxDQUFDQyxPQUFKLENBQVlILEtBQUssQ0FBQ0ksT0FBTixLQUFrQixDQUE5QjtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0JDLEtBQXRCO0lBQ0FNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0lBRUEsT0FBT0ssR0FBRyxDQUFDQyxJQUFKLENBQ0w7TUFDRVgsRUFBRSxFQUFFQSxFQUROO01BRUVDLElBQUksRUFBRUEsSUFGUjtNQUdFQyxLQUFLLEVBQUVBO0lBSFQsQ0FESyxFQU1MVSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFOUCxDQUFQO0VBUUQsQ0FyQnlCLENBc0IxQjs7O0VBQ2lCLE1BQVhDLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0lBQ3ZCLE9BQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtNQUN0Q1QsR0FBRyxDQUFDVSxNQUFKLENBQVdKLEtBQVgsRUFBa0JKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUE5QixFQUEwQyxDQUFDTyxHQUFELEVBQU1DLE9BQU4sS0FBa0I7UUFDMUQsSUFBSUQsR0FBSixFQUFTLE9BQU9GLE1BQU0sQ0FBQ0UsR0FBRCxDQUFiO1FBQ1RiLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYSxPQUFaO1FBQ0FKLE9BQU8sQ0FBQ0ksT0FBRCxDQUFQO01BQ0QsQ0FKRDtJQUtELENBTk0sQ0FBUDtFQU9EOztFQUNEQyxlQUFlLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxFQUFpQjtJQUM5QixPQUFPQyxlQUFBLENBQU9DLE9BQVAsQ0FBZUgsUUFBZixFQUF5QkMsSUFBekIsQ0FBUDtFQUNEOztFQUVERyxlQUFlLENBQUNKLFFBQUQsRUFBVztJQUN4QixPQUFPRSxlQUFBLENBQU9ELElBQVAsQ0FBWUQsUUFBWixFQUFzQixFQUF0QixDQUFQO0VBQ0QsQ0F0Q3lCLENBd0MxQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBakQwQjs7ZUFvRGIsSUFBSTFCLHFCQUFKLEUifQ==