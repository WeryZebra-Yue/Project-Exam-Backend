"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controller = void 0;

var _admin = _interopRequireDefault(require("../../services/admin.service"));

var _authentication = _interopRequireDefault(require("../../services/authentication.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  async signIn(req, res) {
    const {
      email,
      password
    } = req.body;
    const user = await _admin.default.signIn(email, password);
    res.status(200).send(user);
  }

  async addExaminer(req, res) {
    const user = await _admin.default.addExaminer(req.body.user);
    res.status(200).send(user);
  }

  async getExaminers(req, res) {
    const {
      limit
    } = req.query;
    if (!limit) limit = 10;
    const users = await _admin.default.getExaminers(limit);
    res.status(200).send(users);
  }

  async getExaminersUsingId(req, res) {
    const {
      id
    } = req.params;
    const user = await _admin.default.getExaminersUsingId(id);
    res.status(200).send(user);
  }

  async getAllExaminers(req, res) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = await _authentication.default.verifyToken(token);
      console.log(decoded);

      if (decoded) {
        const users = await _admin.default.getAllExaminers();
        res.status(200).send(users);
      }
    } catch (err) {
      res.status(401).send("Unauthorized");
    }
  }

  async addAdmin(req, res) {
    const user = await _admin.default.addAdmin(req.body);
    res.status(200).send(user);
  }

  async updateExaminer(req, res) {
    const user = await _admin.default.updateExaminer(req.body.user);
    res.status(200).send(user);
  }

  async updateAdmin(req, res) {
    const user = await _admin.default.updateAdmin(req.body);
    res.status(200).send(user);
  }

  async getAdmins(req, res) {
    const admins = await _admin.default.getAdmins();
    res.status(200).send(admins);
  }

  async getPassword(req, res) {
    const {
      email
    } = req.body;
    const password = await _admin.default.getPassword(email);
    res.status(200).send(password);
  }

  async verifyToken(req, res) {
    const {
      token
    } = req.body;
    const decoded = await _authentication.default.verifyToken(token);

    if (decoded) {
      res.status(200).send(decoded);
    } else {
      res.status(401).send("Unauthorized");
    }
  }

  async addMultipleUsers(req, res) {
    const users = await _admin.default.addMultipleUsers(req.body.users);
    res.status(200).send(users);
  } // async getUniversity(req, res) {
  //   const { name } = req.body;
  //   const university = await AdminService.getUniversity(name);
  //   res.status(200).send(university);
  // }


  async addUniversity(req, res) {
    const university = await _admin.default.addUniversity(req.body);
    res.status(200).send(university);
  }

  async getUniversities(req, res) {
    const universities = await _admin.default.getUniversities();
    res.status(200).send(universities);
  }

  async updateUniversity(req, res) {
    const university = await _admin.default.updateUniversity(req.body);
    res.status(200).send(university);
  }

}

exports.Controller = Controller;

var _default = new Controller();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb250cm9sbGVyIiwic2lnbkluIiwicmVxIiwicmVzIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwiQWRtaW5TZXJ2aWNlIiwic3RhdHVzIiwic2VuZCIsImFkZEV4YW1pbmVyIiwiZ2V0RXhhbWluZXJzIiwibGltaXQiLCJxdWVyeSIsInVzZXJzIiwiZ2V0RXhhbWluZXJzVXNpbmdJZCIsImlkIiwicGFyYW1zIiwiZ2V0QWxsRXhhbWluZXJzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInNwbGl0IiwiZGVjb2RlZCIsImF1dGhlbnRpY2F0aW9uU2VydmljZSIsInZlcmlmeVRva2VuIiwiY29uc29sZSIsImxvZyIsImVyciIsImFkZEFkbWluIiwidXBkYXRlRXhhbWluZXIiLCJ1cGRhdGVBZG1pbiIsImdldEFkbWlucyIsImFkbWlucyIsImdldFBhc3N3b3JkIiwiYWRkTXVsdGlwbGVVc2VycyIsImFkZFVuaXZlcnNpdHkiLCJ1bml2ZXJzaXR5IiwiZ2V0VW5pdmVyc2l0aWVzIiwidW5pdmVyc2l0aWVzIiwidXBkYXRlVW5pdmVyc2l0eSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvYWRtaW4vY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5TZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hZG1pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCBhdXRoZW50aWNhdGlvblNlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBhc3luYyBzaWduSW4ocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgQWRtaW5TZXJ2aWNlLnNpZ25JbihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQodXNlcik7XHJcbiAgfVxyXG4gIGFzeW5jIGFkZEV4YW1pbmVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgQWRtaW5TZXJ2aWNlLmFkZEV4YW1pbmVyKHJlcS5ib2R5LnVzZXIpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQodXNlcik7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVycyhyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgaWYgKCFsaW1pdCkgbGltaXQgPSAxMDtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgQWRtaW5TZXJ2aWNlLmdldEV4YW1pbmVycyhsaW1pdCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2Vycyk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nSWQocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgQWRtaW5TZXJ2aWNlLmdldEV4YW1pbmVyc1VzaW5nSWQoaWQpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQodXNlcik7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEFsbEV4YW1pbmVycyhyZXEsIHJlcykge1xyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KFwiIFwiKVsxXTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UudmVyaWZ5VG9rZW4odG9rZW4pO1xyXG4gICAgICBjb25zb2xlLmxvZyhkZWNvZGVkKTtcclxuICAgICAgaWYgKGRlY29kZWQpIHtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IEFkbWluU2VydmljZS5nZXRBbGxFeGFtaW5lcnMoKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2Vycyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZChcIlVuYXV0aG9yaXplZFwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgYWRkQWRtaW4ocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBBZG1pblNlcnZpY2UuYWRkQWRtaW4ocmVxLmJvZHkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQodXNlcik7XHJcbiAgfVxyXG4gIGFzeW5jIHVwZGF0ZUV4YW1pbmVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgQWRtaW5TZXJ2aWNlLnVwZGF0ZUV4YW1pbmVyKHJlcS5ib2R5LnVzZXIpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQodXNlcik7XHJcbiAgfVxyXG4gIGFzeW5jIHVwZGF0ZUFkbWluKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgQWRtaW5TZXJ2aWNlLnVwZGF0ZUFkbWluKHJlcS5ib2R5KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXIpO1xyXG4gIH1cclxuICBhc3luYyBnZXRBZG1pbnMocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IGFkbWlucyA9IGF3YWl0IEFkbWluU2VydmljZS5nZXRBZG1pbnMoKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGFkbWlucyk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldFBhc3N3b3JkKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gYXdhaXQgQWRtaW5TZXJ2aWNlLmdldFBhc3N3b3JkKGVtYWlsKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHBhc3N3b3JkKTtcclxuICB9XHJcbiAgYXN5bmMgdmVyaWZ5VG9rZW4ocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS52ZXJpZnlUb2tlbih0b2tlbik7XHJcbiAgICBpZiAoZGVjb2RlZCkge1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkZWNvZGVkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgYWRkTXVsdGlwbGVVc2VycyhyZXEsIHJlcykge1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBBZG1pblNlcnZpY2UuYWRkTXVsdGlwbGVVc2VycyhyZXEuYm9keS51c2Vycyk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2Vycyk7XHJcbiAgfVxyXG4gIC8vIGFzeW5jIGdldFVuaXZlcnNpdHkocmVxLCByZXMpIHtcclxuICAvLyAgIGNvbnN0IHsgbmFtZSB9ID0gcmVxLmJvZHk7XHJcbiAgLy8gICBjb25zdCB1bml2ZXJzaXR5ID0gYXdhaXQgQWRtaW5TZXJ2aWNlLmdldFVuaXZlcnNpdHkobmFtZSk7XHJcbiAgLy8gICByZXMuc3RhdHVzKDIwMCkuc2VuZCh1bml2ZXJzaXR5KTtcclxuICAvLyB9XHJcbiAgYXN5bmMgYWRkVW5pdmVyc2l0eShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgdW5pdmVyc2l0eSA9IGF3YWl0IEFkbWluU2VydmljZS5hZGRVbml2ZXJzaXR5KHJlcS5ib2R5KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVuaXZlcnNpdHkpO1xyXG4gIH1cclxuICBhc3luYyBnZXRVbml2ZXJzaXRpZXMocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHVuaXZlcnNpdGllcyA9IGF3YWl0IEFkbWluU2VydmljZS5nZXRVbml2ZXJzaXRpZXMoKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVuaXZlcnNpdGllcyk7XHJcbiAgfVxyXG4gIGFzeW5jIHVwZGF0ZVVuaXZlcnNpdHkocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHVuaXZlcnNpdHkgPSBhd2FpdCBBZG1pblNlcnZpY2UudXBkYXRlVW5pdmVyc2l0eShyZXEuYm9keSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh1bml2ZXJzaXR5KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnRyb2xsZXIoKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFTyxNQUFNQSxVQUFOLENBQWlCO0VBQ1YsTUFBTkMsTUFBTSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBVztJQUNyQixNQUFNO01BQUVDLEtBQUY7TUFBU0M7SUFBVCxJQUFzQkgsR0FBRyxDQUFDSSxJQUFoQztJQUVBLE1BQU1DLElBQUksR0FBRyxNQUFNQyxjQUFBLENBQWFQLE1BQWIsQ0FBb0JHLEtBQXBCLEVBQTJCQyxRQUEzQixDQUFuQjtJQUNBRixHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsSUFBckI7RUFDRDs7RUFDZ0IsTUFBWEksV0FBVyxDQUFDVCxHQUFELEVBQU1DLEdBQU4sRUFBVztJQUMxQixNQUFNSSxJQUFJLEdBQUcsTUFBTUMsY0FBQSxDQUFhRyxXQUFiLENBQXlCVCxHQUFHLENBQUNJLElBQUosQ0FBU0MsSUFBbEMsQ0FBbkI7SUFDQUosR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILElBQXJCO0VBQ0Q7O0VBQ2lCLE1BQVpLLFlBQVksQ0FBQ1YsR0FBRCxFQUFNQyxHQUFOLEVBQVc7SUFDM0IsTUFBTTtNQUFFVTtJQUFGLElBQVlYLEdBQUcsQ0FBQ1ksS0FBdEI7SUFDQSxJQUFJLENBQUNELEtBQUwsRUFBWUEsS0FBSyxHQUFHLEVBQVI7SUFDWixNQUFNRSxLQUFLLEdBQUcsTUFBTVAsY0FBQSxDQUFhSSxZQUFiLENB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