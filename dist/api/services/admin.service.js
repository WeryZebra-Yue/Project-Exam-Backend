"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _authentication = _interopRequireDefault(require("./authentication.service"));

var _AdminModel = _interopRequireDefault(require("../../models/AdminModel"));

var _ExaminerModel = _interopRequireDefault(require("../../models/ExaminerModel"));

var _UniversityModel = _interopRequireDefault(require("../../models/UniversityModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AdminService {
  async signIn(email, password) {
    const user = await _AdminModel.default.findOne({
      email
    });

    if (!user) {
      return {
        status: 400,
        message: "Admin not found"
      };
    }

    const isPasswordMatch = password === user.password;

    if (!isPasswordMatch) {
      return {
        status: 400,
        message: "Incorrect password"
      };
    }

    console.log(user);

    if (user.email === "coe@ppsu.ac.in" || user.email === "developer@ppsu.db") {
      return {
        status: 200,
        message: "Login successful",
        token: _authentication.default.generateToken(user.id, user.role, true)
      };
    } else {
      return {
        status: 200,
        message: "Login successful",
        token: _authentication.default.generateToken(user.id, user.role, false)
      };
    }
  }

  async addExaminer(user) {
    if (user.e_id === "SOE") {
      let count = await _ExaminerModel.default.countDocuments({
        e_id: "SOE"
      });
      count++;

      if (count < 10) {
        user["eid"] = `SOE000${count}`;
      } else if (count < 100) {
        user["eid"] = `SOE00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SOE0${count}`;
      }
    } else if (user.e_id === "SOP") {
      let count = await _ExaminerModel.default.countDocuments({
        e_id: "SOP"
      });
      count++;

      if (count < 10) {
        user["eid"] = `SOP000${count}`;
      } else if (count < 100) {
        user["eid"] = `SOP00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SOP0${count}`;
      }
    } else if (user.e_id === "SON") {
      let count = await _ExaminerModel.default.countDocuments({
        e_id: "SON"
      });
      count++;

      if (count < 10) {
        user["eid"] = `SON000${count}`;
      } else if (count < 100) {
        user["eid"] = `SON00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SON0${count}`;
      }
    } else if (user.e_id === "SLM") {
      let count = await _ExaminerModel.default.countDocuments({
        e_id: "SLM"
      });
      count++;

      if (count < 10) {
        user["eid"] = `SLM000${count}`;
      } else if (count < 100) {
        user["eid"] = `SLM00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SLM0${count}`;
      }
    }

    return _ExaminerModel.default.create(user);
  }

  async getExaminers(limit) {
    return _ExaminerModel.default.find().limit(limit);
  }

  async getExaminersUsingId(id) {
    return _ExaminerModel.default.findById(id);
  }

  async getExaminersUsingName(name) {
    // index search
    return _ExaminerModel.default.find({
      name
    });
  }

  async getExaminersUsingEmail(email) {
    return _ExaminerModel.default.find({
      email
    });
  }

  async getExaminersUsingMobile(mobile) {
    return _ExaminerModel.default.find({
      mobile
    });
  }

  async getAllExaminers() {
    return _ExaminerModel.default.find();
  } // Super Admin


  async addAdmin(user) {
    const email = user.email;
    const user_Exist = await _AdminModel.default.findOne({
      email
    });

    if (user_Exist) {
      return {
        status: 400,
        message: "Admin already exists"
      };
    }

    const admin = await _AdminModel.default.create({
      email: user.email,
      password: user.password,
      role: user.role,
      passwordLength: user.password.length
    });
    return {
      status: 200,
      message: "Admin added successfully"
    };
  }

  async updateAdmin(user) {
    const email = user.email;
    console.log(user);
    const admin = await _AdminModel.default.findOne({
      email
    });

    if (!admin) {
      return {
        status: 400,
        message: "Admin not found"
      };
    }

    const updatedAdmin = await _AdminModel.default.findByIdAndUpdate(admin._id, {
      password: user.password,
      passwordLength: user.password.length,
      role: user.role
    });
    return updatedAdmin;
  }

  async getAdmins() {
    const admins = await _AdminModel.default.find();
    admins.forEach((admin, index) => {
      if (admin.email === "developer@ppsu.db") {
        admins.splice(index, 1);
      }
    });
    return admins;
  }

  async getPassword(email) {
    const admin = await _AdminModel.default.findOne({
      email
    });

    if (!admin) {
      return {
        status: 400,
        message: "Admin not found"
      };
    }

    return admin.password;
  }

  async updateExaminer(user) {
    console.log(user);
    return _ExaminerModel.default.findByIdAndUpdate(user.id, user);
  }

  async addMultipleUsers(users) {
    const response = [];
    users.forEach(async user => {
      const resposne = await this.addExaminer(user);
      response.push(resposne);
    });
    return response;
  }

  async addUniversity(university) {
    return _UniversityModel.default.create(university);
  }

  async getUniversities() {
    return _UniversityModel.default.find();
  }

  async updateUniversity(university) {
    return _UniversityModel.default.findByIdAndUpdate(university._id, university);
  }

  async getDistance(name) {
    return _UniversityModel.default.findOne({
      name
    });
  }

}

var _default = new AdminService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBZG1pblNlcnZpY2UiLCJzaWduSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlciIsIkFkbWluIiwiZmluZE9uZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJpc1Bhc3N3b3JkTWF0Y2giLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJBdXRoZW50aWNhdGlvblNlcnZpY2UiLCJnZW5lcmF0ZVRva2VuIiwiaWQiLCJyb2xlIiwiYWRkRXhhbWluZXIiLCJlX2lkIiwiY291bnQiLCJFeGFtaW5lciIsImNvdW50RG9jdW1lbnRzIiwiY3JlYXRlIiwiZ2V0RXhhbWluZXJzIiwibGltaXQiLCJmaW5kIiwiZ2V0RXhhbWluZXJzVXNpbmdJZCIsImZpbmRCeUlkIiwiZ2V0RXhhbWluZXJzVXNpbmdOYW1lIiwibmFtZSIsImdldEV4YW1pbmVyc1VzaW5nRW1haWwiLCJnZXRFeGFtaW5lcnNVc2luZ01vYmlsZSIsIm1vYmlsZSIsImdldEFsbEV4YW1pbmVycyIsImFkZEFkbWluIiwidXNlcl9FeGlzdCIsImFkbWluIiwicGFzc3dvcmRMZW5ndGgiLCJsZW5ndGgiLCJ1cGRhdGVBZG1pbiIsInVwZGF0ZWRBZG1pbiIsImZpbmRCeUlkQW5kVXBkYXRlIiwiX2lkIiwiZ2V0QWRtaW5zIiwiYWRtaW5zIiwiZm9yRWFjaCIsImluZGV4Iiwic3BsaWNlIiwiZ2V0UGFzc3dvcmQiLCJ1cGRhdGVFeGFtaW5lciIsImFkZE11bHRpcGxlVXNlcnMiLCJ1c2VycyIsInJlc3BvbnNlIiwicmVzcG9zbmUiLCJwdXNoIiwiYWRkVW5pdmVyc2l0eSIsInVuaXZlcnNpdHkiLCJVbml2ZXJzaXR5TW9kZWwiLCJnZXRVbml2ZXJzaXRpZXMiLCJ1cGRhdGVVbml2ZXJzaXR5IiwiZ2V0RGlzdGFuY2UiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL3NlcnZpY2VzL2FkbWluLnNlcnZpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dGhlbnRpY2F0aW9uU2VydmljZSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCBBZG1pbiBmcm9tIFwiLi4vLi4vbW9kZWxzL0FkbWluTW9kZWxcIjtcclxuaW1wb3J0IEV4YW1pbmVyIGZyb20gXCIuLi8uLi9tb2RlbHMvRXhhbWluZXJNb2RlbFwiO1xyXG5pbXBvcnQgVW5pdmVyc2l0eU1vZGVsIGZyb20gXCIuLi8uLi9tb2RlbHMvVW5pdmVyc2l0eU1vZGVsXCI7XHJcbmNsYXNzIEFkbWluU2VydmljZSB7XHJcbiAgYXN5bmMgc2lnbkluKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IEFkbWluLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiQWRtaW4gbm90IGZvdW5kXCIsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc1Bhc3N3b3JkTWF0Y2ggPSBwYXNzd29yZCA9PT0gdXNlci5wYXNzd29yZDtcclxuXHJcbiAgICBpZiAoIWlzUGFzc3dvcmRNYXRjaCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiSW5jb3JyZWN0IHBhc3N3b3JkXCIsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIGlmICh1c2VyLmVtYWlsID09PSBcImNvZUBwcHN1LmFjLmluXCIgfHwgdXNlci5lbWFpbCA9PT0gXCJkZXZlbG9wZXJAcHBzdS5kYlwiKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgbWVzc2FnZTogXCJMb2dpbiBzdWNjZXNzZnVsXCIsXHJcbiAgICAgICAgdG9rZW46IEF1dGhlbnRpY2F0aW9uU2VydmljZS5nZW5lcmF0ZVRva2VuKHVzZXIuaWQsIHVzZXIucm9sZSwgdHJ1ZSksXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiTG9naW4gc3VjY2Vzc2Z1bFwiLFxyXG4gICAgICAgIHRva2VuOiBBdXRoZW50aWNhdGlvblNlcnZpY2UuZ2VuZXJhdGVUb2tlbih1c2VyLmlkLCB1c2VyLnJvbGUsIGZhbHNlKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgYWRkRXhhbWluZXIodXNlcikge1xyXG4gICAgaWYgKHVzZXIuZV9pZCA9PT0gXCJTT0VcIikge1xyXG4gICAgICBsZXQgY291bnQgPSBhd2FpdCBFeGFtaW5lci5jb3VudERvY3VtZW50cyh7IGVfaWQ6IFwiU09FXCIgfSk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICAgIGlmIChjb3VudCA8IDEwKSB7XHJcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTT0UwMDAke2NvdW50fWA7XHJcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMDApIHtcclxuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNPRTAwJHtjb3VudH1gO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMTAwMCkge1xyXG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU09FMCR7Y291bnR9YDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh1c2VyLmVfaWQgPT09IFwiU09QXCIpIHtcclxuICAgICAgbGV0IGNvdW50ID0gYXdhaXQgRXhhbWluZXIuY291bnREb2N1bWVudHMoeyBlX2lkOiBcIlNPUFwiIH0pO1xyXG4gICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgaWYgKGNvdW50IDwgMTApIHtcclxuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNPUDAwMCR7Y291bnR9YDtcclxuICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDEwMCkge1xyXG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU09QMDAke2NvdW50fWA7XHJcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMDAwKSB7XHJcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTT1AwJHtjb3VudH1gO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHVzZXIuZV9pZCA9PT0gXCJTT05cIikge1xyXG4gICAgICBsZXQgY291bnQgPSBhd2FpdCBFeGFtaW5lci5jb3VudERvY3VtZW50cyh7IGVfaWQ6IFwiU09OXCIgfSk7XHJcbiAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICBpZiAoY291bnQgPCAxMCkge1xyXG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU09OMDAwJHtjb3VudH1gO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMTAwKSB7XHJcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTT04wMCR7Y291bnR9YDtcclxuICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDEwMDApIHtcclxuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNPTjAke2NvdW50fWA7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodXNlci5lX2lkID09PSBcIlNMTVwiKSB7XHJcbiAgICAgIGxldCBjb3VudCA9IGF3YWl0IEV4YW1pbmVyLmNvdW50RG9jdW1lbnRzKHsgZV9pZDogXCJTTE1cIiB9KTtcclxuICAgICAgY291bnQrKztcclxuXHJcbiAgICAgIGlmIChjb3VudCA8IDEwKSB7XHJcbiAgICAgICAgdXNlcltcImVpZFwiXSA9IGBTTE0wMDAke2NvdW50fWA7XHJcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMDApIHtcclxuICAgICAgICB1c2VyW1wiZWlkXCJdID0gYFNMTTAwJHtjb3VudH1gO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMTAwMCkge1xyXG4gICAgICAgIHVzZXJbXCJlaWRcIl0gPSBgU0xNMCR7Y291bnR9YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBFeGFtaW5lci5jcmVhdGUodXNlcik7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVycyhsaW1pdCkge1xyXG4gICAgcmV0dXJuIEV4YW1pbmVyLmZpbmQoKS5saW1pdChsaW1pdCk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nSWQoaWQpIHtcclxuICAgIHJldHVybiBFeGFtaW5lci5maW5kQnlJZChpZCk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nTmFtZShuYW1lKSB7XHJcbiAgICAvLyBpbmRleCBzZWFyY2hcclxuXHJcbiAgICByZXR1cm4gRXhhbWluZXIuZmluZCh7IG5hbWUgfSk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nRW1haWwoZW1haWwpIHtcclxuICAgIHJldHVybiBFeGFtaW5lci5maW5kKHsgZW1haWwgfSk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4YW1pbmVyc1VzaW5nTW9iaWxlKG1vYmlsZSkge1xyXG4gICAgcmV0dXJuIEV4YW1pbmVyLmZpbmQoeyBtb2JpbGUgfSk7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEFsbEV4YW1pbmVycygpIHtcclxuICAgIHJldHVybiBFeGFtaW5lci5maW5kKCk7XHJcbiAgfVxyXG5cclxuICAvLyBTdXBlciBBZG1pblxyXG4gIGFzeW5jIGFkZEFkbWluKHVzZXIpIHtcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlci5lbWFpbDtcclxuICAgIGNvbnN0IHVzZXJfRXhpc3QgPSBhd2FpdCBBZG1pbi5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICBpZiAodXNlcl9FeGlzdCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiQWRtaW4gYWxyZWFkeSBleGlzdHNcIixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgQWRtaW4uY3JlYXRlKHtcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICAgIHBhc3N3b3JkTGVuZ3RoOiB1c2VyLnBhc3N3b3JkLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBtZXNzYWdlOiBcIkFkbWluIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgfTtcclxuICB9XHJcbiAgYXN5bmMgdXBkYXRlQWRtaW4odXNlcikge1xyXG4gICAgY29uc3QgZW1haWwgPSB1c2VyLmVtYWlsO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICBjb25zdCBhZG1pbiA9IGF3YWl0IEFkbWluLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmICghYWRtaW4pIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdGF0dXM6IDQwMCxcclxuICAgICAgICBtZXNzYWdlOiBcIkFkbWluIG5vdCBmb3VuZFwiLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRBZG1pbiA9IGF3YWl0IEFkbWluLmZpbmRCeUlkQW5kVXBkYXRlKGFkbWluLl9pZCwge1xyXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcclxuICAgICAgcGFzc3dvcmRMZW5ndGg6IHVzZXIucGFzc3dvcmQubGVuZ3RoLFxyXG4gICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1cGRhdGVkQWRtaW47XHJcbiAgfVxyXG4gIGFzeW5jIGdldEFkbWlucygpIHtcclxuICAgIGNvbnN0IGFkbWlucyA9IGF3YWl0IEFkbWluLmZpbmQoKTtcclxuXHJcbiAgICBhZG1pbnMuZm9yRWFjaCgoYWRtaW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChhZG1pbi5lbWFpbCA9PT0gXCJkZXZlbG9wZXJAcHBzdS5kYlwiKSB7XHJcbiAgICAgICAgYWRtaW5zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFkbWlucztcclxuICB9XHJcbiAgYXN5bmMgZ2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgQWRtaW4uZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgaWYgKCFhZG1pbikge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiQWRtaW4gbm90IGZvdW5kXCIsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWRtaW4ucGFzc3dvcmQ7XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGRhdGVFeGFtaW5lcih1c2VyKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIHJldHVybiBFeGFtaW5lci5maW5kQnlJZEFuZFVwZGF0ZSh1c2VyLmlkLCB1c2VyKTtcclxuICB9XHJcbiAgYXN5bmMgYWRkTXVsdGlwbGVVc2Vycyh1c2Vycykge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBbXTtcclxuICAgIHVzZXJzLmZvckVhY2goYXN5bmMgKHVzZXIpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9zbmUgPSBhd2FpdCB0aGlzLmFkZEV4YW1pbmVyKHVzZXIpO1xyXG4gICAgICByZXNwb25zZS5wdXNoKHJlc3Bvc25lKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuICBhc3luYyBhZGRVbml2ZXJzaXR5KHVuaXZlcnNpdHkpIHtcclxuICAgIHJldHVybiBVbml2ZXJzaXR5TW9kZWwuY3JlYXRlKHVuaXZlcnNpdHkpO1xyXG4gIH1cclxuICBhc3luYyBnZXRVbml2ZXJzaXRpZXMoKSB7XHJcbiAgICByZXR1cm4gVW5pdmVyc2l0eU1vZGVsLmZpbmQoKTtcclxuICB9XHJcbiAgYXN5bmMgdXBkYXRlVW5pdmVyc2l0eSh1bml2ZXJzaXR5KSB7XHJcbiAgICByZXR1cm4gVW5pdmVyc2l0eU1vZGVsLmZpbmRCeUlkQW5kVXBkYXRlKHVuaXZlcnNpdHkuX2lkLCB1bml2ZXJzaXR5KTtcclxuICB9XHJcbiAgYXN5bmMgZ2V0RGlzdGFuY2UobmFtZSkge1xyXG4gICAgcmV0dXJuIFVuaXZlcnNpdHlNb2RlbC5maW5kT25lKHsgbmFtZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBZG1pblNlcnZpY2UoKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSxNQUFNQSxZQUFOLENBQW1CO0VBQ0wsTUFBTkMsTUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBa0I7SUFDNUIsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLG1CQUFBLENBQU1DLE9BQU4sQ0FBYztNQUFFSjtJQUFGLENBQWQsQ0FBbkI7O0lBQ0EsSUFBSSxDQUFDRSxJQUFMLEVBQVc7TUFDVCxPQUFPO1FBQ0xHLE1BQU0sRUFBRSxHQURIO1FBRUxDLE9BQU8sRUFBRTtNQUZKLENBQVA7SUFJRDs7SUFDRCxNQUFNQyxlQUFlLEdBQUdOLFFBQVEsS0FBS0MsSUFBSSxDQUFDRCxRQUExQzs7SUFFQSxJQUFJLENBQUNNLGVBQUwsRUFBc0I7TUFDcEIsT0FBTztRQUNMRixNQUFNLEVBQUUsR0FESDtRQUVMQyxPQUFPLEVBQUU7TUFGSixDQUFQO0lBSUQ7O0lBQ0RFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaOztJQUNBLElBQUlBLElBQUksQ0FBQ0YsS0FBTCxLQUFlLGdCQUFmLElBQW1DRSxJQUFJLENBQUNGLEtBQUwsS0FBZSxtQkFBdEQsRUFBMkU7TUFDekUsT0FBTztRQUNMSyxNQUFNLEVBQUUsR0FESDtRQUVMQyxPQUFPLEVBQUUsa0JBRko7UUFHTEksS0FBSyxFQUFFQyx1QkFBQSxDQUFzQkMsYUFBdEIsQ0FBb0NWLElBQUksQ0FBQ1csRUFBekMsRUFBNkNYLElBQUksQ0FBQ1ksSUFBbEQsRUFBd0Qs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