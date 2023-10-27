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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvblNlcnZpY2UiLCJnZW5lcmF0ZVRva2VuIiwiaWQiLCJyb2xlIiwiYWRtaW4iLCJ0b2RheSIsIkRhdGUiLCJleHAiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJqd3QiLCJzaWduIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJ2ZXJpZnlUb2tlbiIsInRva2VuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ2ZXJpZnkiLCJlcnIiLCJwYXlsb2FkIiwiZGVjcnlwdFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoIiwiYmNyeXB0IiwiY29tcGFyZSIsImVuY3J5cHRQYXNzd29yZCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5jbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICAvKipcbiAgICogR2VuZXJhdGUgdGhlIEpXVCBUb2tlbiBmb3IgdGhlIHVzZXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gSUQgb2YgdGhlIHVzZXJcbiAgICovXG4gIGdlbmVyYXRlVG9rZW4oaWQsIHJvbGUsIGFkbWluKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGV4cCA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAvLyBhZGQgMjQgaG91cnMgdG8gY3VycmVudCBkYXRlIGRhdGVcbiAgICBleHAuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKTtcbiAgICBjb25zb2xlLmxvZyhpZCwgcm9sZSwgYWRtaW4pO1xuICAgIGNvbnNvbGUubG9nKGV4cCk7XG5cbiAgICByZXR1cm4gand0LnNpZ24oXG4gICAgICB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcm9sZTogcm9sZSxcbiAgICAgICAgYWRtaW46IGFkbWluLFxuICAgICAgfSxcbiAgICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRcbiAgICApO1xuICB9XG4gIC8vIGRlY3J5cHQgcGFzc3dvcmRcbiAgYXN5bmMgdmVyaWZ5VG9rZW4odG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgKGVyciwgcGF5bG9hZCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQpO1xuICAgICAgICByZXNvbHZlKHBheWxvYWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZGVjcnlwdFBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoKSB7XG4gICAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoKTtcbiAgfVxuXG4gIGVuY3J5cHRQYXNzd29yZChwYXNzd29yZCkge1xuICAgIHJldHVybiBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICB9XG5cbiAgLy8gZW5jcnlwdCBwYXNzd29yZFxuICAvLyBhc3luYyB2ZXJpZnlBZG1pbih0b2tlbikge1xuICAvLyAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB0aGlzLnZlcmlmeVRva2VuKHRva2VuKTtcbiAgLy8gICBjb25zdCB1c2VyID0gYXdhaXQgQWRtaW4uZmluZEJ5SWQocGF5bG9hZC5pZClcbiAgLy8gICAgIC5zZWxlY3QoXCItcGFzc3dvcmRcIilcbiAgLy8gICAgIC5sZWFuKClcbiAgLy8gICAgIC5leGVjKCk7XG4gIC8vICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgLy8gICByZXR1cm4gdXNlcjtcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aGVudGljYXRpb25TZXJ2aWNlKCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFDQSxNQUFNQSxxQkFBTixDQUE0QjtFQUMxQjtBQUNGO0FBQ0E7QUFDQTtFQUNFQyxhQUFhLENBQUNDLEVBQUQsRUFBS0MsSUFBTCxFQUFXQyxLQUFYLEVBQWtCO0lBQzdCLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7SUFDQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUQsSUFBSixDQUFTRCxLQUFULENBQVosQ0FGNkIsQ0FHN0I7O0lBQ0FFLEdBQUcsQ0FBQ0MsT0FBSixDQUFZSCxLQUFLLENBQUNJLE9BQU4sS0FBa0IsQ0FBOUI7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlULEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxLQUF0QjtJQUNBTSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBWjtJQUVBLE9BQU9LLEdBQUcsQ0FBQ0MsSUFBSixDQUNMO01BQ0VYLEVBQUUsRUFBRUEsRUFETjtNQUVFQyxJQUFJLEVBQUVBLElBRlI7TUFHRUMsS0FBSyxFQUFFQTtJQUhULENBREssRUFNTFUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBTlAsQ0FBUDtFQVFELENBckJ5QixDQXNCMUI7OztFQUNpQixNQUFYQyxXQUFXLENBQUNDLEtBQUQsRUFBUTtJQUN2QixPQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7TUFDdENULEdBQUcsQ0FBQ1UsTUFBSixDQUFXSixLQUFYLEVBQWtCSixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBOUIsRUFBMEMsQ0FBQ08sR0FBRCxFQUFNQyxPQUFOLEtBQWtCO1FBQzFELElBQUlELEdBQUosRUFBUyxPQUFPRixNQUFNLENBQUNFLEdBQUQsQ0FBYjtRQUNUYixPQUFPLENBQUNDLEdBQVIsQ0FBWWEsT0FBWjtRQUNBSixPQUFPLENBQUNJLE9BQUQsQ0FBUDtNQUNELENBSkQ7SUFLRCxDQU5NLENBQVA7RUFPRDs7RUFDREMsZUFBZSxDQUFDQyxRQUFELEVBQVdDLElBQVgsRUFBaUI7SUFDOUIsT0FBT0MsZUFBQSxDQUFPQyxPQUFQLENBQWVILFFBQWYsRUFBeUJDLElBQXpCLENBQVA7RUFDRDs7RUFFREcsZUFBZSxDQUFDSixRQUFELEVBQVc7SUFDeEIsT0FBT0UsZUFBQSxDQUFPRCxJQUFQLENBQVlELFFBQVosRUFBc0IsRUFBdEIsQ0FBUDtFQUNELENBdEN5QixDQXdDMUI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQWpEMEI7O2VBb0RiLElBQUkxQixxQkFBSixFIn0=