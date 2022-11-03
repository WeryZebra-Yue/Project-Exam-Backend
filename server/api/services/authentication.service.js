import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
class AuthenticationService {
  /**
   * Generate the JWT Token for the user
   * @param {String} id - ID of the user
   */
  generateToken(id, role, admin) {
    const today = new Date();
    const exp = new Date(today);
    // add 24 hours to current date date
    exp.setDate(today.getDate() + 1);
    console.log(id, role, admin);
    console.log(exp);

    return jwt.sign(
      {
        id: id,
        role: role,
        admin: admin,
      },
      process.env.JWT_SECRET
    );
  }
  // decrypt password
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
    return bcrypt.compare(password, hash);
  }

  encryptPassword(password) {
    return bcrypt.hash(password, 10);
  }

  // encrypt password
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

export default new AuthenticationService();
