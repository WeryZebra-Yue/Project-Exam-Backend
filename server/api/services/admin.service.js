import AuthenticationService from "./authentication.service";
class AdminService {
  async signIn(email, password) {
    const user = await Admin.findOne({ email });
    if (!user) {
      return {
        status: 400,
        message: "User not found",
      };
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return {
        status: 400,
        message: "Incorrect password",
      };
    }
    return {
      status: 200,
      message: "Login successful",
      token: AuthenticationService.generateToken(user._id),
    };
  }
  async addExaminer(user) {
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
}

export default new AdminService();
