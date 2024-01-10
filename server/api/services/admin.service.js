import AuthenticationService from "./authentication.service";
import Admin from "../../models/AdminModel";
import Examiner from "../../models/ExaminerModel";
import UniversityModel from "../../models/UniversityModel";
import MetaDeta from "../../models/MetaDeta";
import Assignment from "../../models/AssignModel";
import e from "express";
class AdminService {
  async signIn(email, password) {
    const user = await Admin.findOne({ email });
    if (!user) {
      return {
        status: 400,
        message: "Admin not found",
      };
    }
    const isPasswordMatch = password === user.password;

    if (!isPasswordMatch) {
      return {
        status: 400,
        message: "Incorrect password",
      };
    }
    console.log(user);
    if (user.email === "coe@ppsu.ac.in" || user.email === "developer@ppsu.db") {
      return {
        status: 200,
        message: "Login successful",
        token: AuthenticationService.generateToken(user.id, user.role, true),
      };
    } else {
      return {
        status: 200,
        message: "Login successful",
        token: AuthenticationService.generateToken(user.id, user.role, false),
      };
    }
  }
  async updateMetaData() {
    const metaData = await MetaDeta.findOne({ unique: "metaData" });
    if (!metaData) {
      return MetaDeta.create({
        unique: "metaData",
        lastUpdated: new Date(),
      });
    } else {
      // update
      return MetaDeta.findByIdAndUpdate(metaData._id, {
        lastUpdated: new Date(),
      });
    }
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
  async deleteExaminer(id) {
    return Examiner.findByIdAndDelete(id);
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
    const email = user.email;
    const user_Exist = await Admin.findOne({ email });
    if (user_Exist) {
      return {
        status: 400,
        message: "Admin already exists",
      };
    }
    const admin = await Admin.create({
      email: user.email,
      password: user.password,
      role: user.role,
      passwordLength: user.password.length,
    });

    return {
      status: 200,
      message: "Admin added successfully",
    };
  }
  async updateAdmin(user) {
    const email = user.email;
    console.log(user);
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return {
        status: 400,
        message: "Admin not found",
      };
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(admin._id, {
      password: user.password,
      passwordLength: user.password.length,
      role: user.role,
    });
    return updatedAdmin;
  }
  async getAdmins() {
    const admins = await Admin.find();

    admins.forEach((admin, index) => {
      if (admin.email === "developer@ppsu.db") {
        admins.splice(index, 1);
      }
    });
    return admins;
  }
  async getPassword(email) {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return {
        status: 400,
        message: "Admin not found",
      };
    }
    return admin.password;
  }

  async updateExaminer(user) {
    console.log(user);
    return Examiner.findByIdAndUpdate(user.id, user);
  }
  async addMultipleUsers(users) {
    const response = [];
    users.forEach(async (user) => {
      const resposne = await this.addExaminer(user);
      response.push(resposne);
    });
    return response;
  }
  async addUniversity(university) {
    return UniversityModel.create(university);
  }
  async getUniversities() {
    return UniversityModel.find();
  }
  async updateUniversity(university) {
    return UniversityModel.findByIdAndUpdate(university._id, university);
  }
  async getDistance(name) {
    return UniversityModel.findOne({ name });
  }
  async getMetaData() {
    return MetaDeta.findOne({ unique: "metaData" });
  }
  async assign(data) {
    return Assignment.create(data);
  }
  async getAssignments() {
    return Assignment.find();
  }
}

export default new AdminService();
