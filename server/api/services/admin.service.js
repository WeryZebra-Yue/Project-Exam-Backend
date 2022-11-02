import AuthenticationService from "./authentication.service";
import Admin from "../../models/AdminModel";
import Examiner from "../../models/ExaminerModel";
class AdminService {
  async signIn(email, password) {
    const user = await Admin.findOne({ email });
    if (!user) {
      return {
        status: 400,
        message: "Admin not found",
      };
    }
    const isPasswordMatch = await AuthenticationService.decryptPassword(
      password,
      user.password
    );
    if (!isPasswordMatch) {
      return {
        status: 400,
        message: "Incorrect password",
      };
    }
    return {
      status: 200,
      message: "Login successful",
      token: AuthenticationService.generateToken(user._id, user.role),
    };
  }
  async addExaminer(user) {
    if (user.e_id === "SOE") {
      let count = await Examiner.countDocuments({ e_id: "SOE" });
      count++;
      if (count < 10) {
        user["eid"] = `SOE000${count}`;
      } else if (count < 100) {
        user["eid"] = `SOE00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SOE0${count}`;
      }
    } else if (user.e_id === "SOP") {
      let count = await Examiner.countDocuments({ e_id: "SOP" });
      count++;

      if (count < 10) {
        user["eid"] = `SOP000${count}`;
      } else if (count < 100) {
        user["eid"] = `SOP00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SOP0${count}`;
      }
    } else if (user.e_id === "SON") {
      let count = await Examiner.countDocuments({ e_id: "SON" });
      count++;

      if (count < 10) {
        user["eid"] = `SON000${count}`;
      } else if (count < 100) {
        user["eid"] = `SON00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SON0${count}`;
      }
    } else if (user.e_id === "SLM") {
      let count = await Examiner.countDocuments({ e_id: "SLM" });
      count++;

      if (count < 10) {
        user["eid"] = `SLM000${count}`;
      } else if (count < 100) {
        user["eid"] = `SLM00${count}`;
      } else if (count < 1000) {
        user["eid"] = `SLM0${count}`;
      }
    }

    return Examiner.create(user);
  }
  async getExaminers(limit) {
    return Examiner.find().limit(limit);
  }
  async getExaminersUsingId(id) {
    return Examiner.findById(id);
  }
  async getExaminersUsingName(name) {
    // index search

    return Examiner.find({ name });
  }
  async getExaminersUsingEmail(email) {
    return Examiner.find({ email });
  }
  async getExaminersUsingMobile(mobile) {
    return Examiner.find({ mobile });
  }
  async getAllExaminers() {
    return Examiner.find();
  }

  // Super Admin
  async addAdmin(user) {
    const password = await AuthenticationService.encryptPassword(user.password);
    console.log(password);
    return Admin.create({
      email: user.email,
      password: password,
      role: user.role,
    });
  }
  async updateExaminer(user) {
    return Examiner.findByIdAndUpdate(user.id, user);
  }
}

export default new AdminService();
