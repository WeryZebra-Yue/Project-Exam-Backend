import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
class AuthenticationService {
  /**
   * Generate the JWT Token for the user
   * @param {String} id - ID of the user
   */
  generateToken(id) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 1000000); //Infinite Expiry!

    return jwt.sign(
      {
        id,
        exp: exp.getTime() / 1000,
      },
      process.env.JWT_SECRET
    );
  }
  // decrypt password
  async verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return reject(err);
        resolve(payload);
      });
    });
  }
  decryptPassword(password, hash) {
    return bcrypt.compare(password, hash);
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
