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
  generateToken(id, role) {
    const today = new Date();
    const exp = new Date(today); // add 24 hours to current date date

    exp.setDate(today.getDate() + 1);
    console.log(exp);
    return jwt.sign({
      id,
      role
    }, process.env.JWT_SECRET);
  } // decrypt password


  async verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return reject(err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvblNlcnZpY2UiLCJnZW5lcmF0ZVRva2VuIiwiaWQiLCJyb2xlIiwidG9kYXkiLCJEYXRlIiwiZXhwIiwic2V0RGF0ZSIsImdldERhdGUiLCJjb25zb2xlIiwibG9nIiwiand0Iiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidmVyaWZ5IiwiZXJyIiwicGF5bG9hZCIsImRlY3J5cHRQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaCIsImJjcnlwdCIsImNvbXBhcmUiLCJlbmNyeXB0UGFzc3dvcmQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEdlbmVyYXRlIHRoZSBKV1QgVG9rZW4gZm9yIHRoZSB1c2VyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIElEIG9mIHRoZSB1c2VyXG4gICAqL1xuICBnZW5lcmF0ZVRva2VuKGlkLCByb2xlKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGV4cCA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAvLyBhZGQgMjQgaG91cnMgdG8gY3VycmVudCBkYXRlIGRhdGVcbiAgICBleHAuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKTtcbiAgICBjb25zb2xlLmxvZyhleHApO1xuXG4gICAgcmV0dXJuIGp3dC5zaWduKFxuICAgICAge1xuICAgICAgICBpZCxcbiAgICAgICAgcm9sZSxcbiAgICAgIH0sXG4gICAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVUXG4gICAgKTtcbiAgfVxuICAvLyBkZWNyeXB0IHBhc3N3b3JkXG4gIGFzeW5jIHZlcmlmeVRva2VuKHRva2VuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIChlcnIsIHBheWxvYWQpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICByZXNvbHZlKHBheWxvYWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZGVjcnlwdFBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoKSB7XG4gICAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoKTtcbiAgfVxuICBlbmNyeXB0UGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHQgcGFzc3dvcmRcbiAgLy8gYXN5bmMgdmVyaWZ5QWRtaW4odG9rZW4pIHtcbiAgLy8gICBjb25zdCBwYXlsb2FkID0gYXdhaXQgdGhpcy52ZXJpZnlUb2tlbih0b2tlbik7XG4gIC8vICAgY29uc3QgdXNlciA9IGF3YWl0IEFkbWluLmZpbmRCeUlkKHBheWxvYWQuaWQpXG4gIC8vICAgICAuc2VsZWN0KFwiLXBhc3N3b3JkXCIpXG4gIC8vICAgICAubGVhbigpXG4gIC8vICAgICAuZXhlYygpO1xuICAvLyAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gIC8vICAgcmV0dXJuIHVzZXI7XG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhlbnRpY2F0aW9uU2VydmljZSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBQ0EsTUFBTUEscUJBQU4sQ0FBNEI7RUFDMUI7QUFDRjtBQUNBO0FBQ0E7RUFDRUMsYUFBYSxDQUFDQyxFQUFELEVBQUtDLElBQUwsRUFBVztJQUN0QixNQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixFQUFkO0lBQ0EsTUFBTUMsR0FBRyxHQUFHLElBQUlELElBQUosQ0FBU0QsS0FBVCxDQUFaLENBRnNCLENBR3RCOztJQUNBRSxHQUFHLENBQUNDLE9BQUosQ0FBWUgsS0FBSyxDQUFDSSxPQUFOLEtBQWtCLENBQTlCO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0lBRUEsT0FBT0ssR0FBRyxDQUFDQyxJQUFKLENBQ0w7TUFDRVYsRUFERjtNQUVFQztJQUZGLENBREssRUFLTFUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBTFAsQ0FBUDtFQU9ELENBbkJ5QixDQW9CMUI7OztFQUNpQixNQUFYQyxXQUFXLENBQUNDLEtBQUQsRUFBUTtJQUN2QixPQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7TUFDdENULEdBQUcsQ0FBQ1UsTUFBSixDQUFXSixLQUFYLEVBQWtCSixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBOUIsRUFBMEMsQ0FBQ08sR0FBRCxFQUFNQyxPQUFOLEtBQWtCO1FBQzFELElBQUlELEdBQUosRUFBUyxPQUFPRixNQUFNLENBQUNFLEdBQUQsQ0FBYjtRQUNUSCxPQUFPLENBQUNJLE9BQUQsQ0FBUDtNQUNELENBSEQ7SUFJRCxDQUxNLENBQVA7RUFNRDs7RUFDREMsZUFBZSxDQUFDQyxRQUFELEVBQVdDLElBQVgsRUFBaUI7SUFDOUIsT0FBT0MsZUFBQSxDQUFPQyxPQUFQLENBQWVILFFBQWYsRUFBeUJDLElBQXpCLENBQVA7RUFDRDs7RUFDREcsZUFBZSxDQUFDSixRQUFELEVBQVc7SUFDeEIsT0FBT0UsZUFBQSxDQUFPRCxJQUFQLENBQVlELFFBQVosRUFBc0IsRUFBdEIsQ0FBUDtFQUNELENBbEN5QixDQW9DMUI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQTdDMEI7O2VBZ0RiLElBQUl6QixxQkFBSixFIn0=