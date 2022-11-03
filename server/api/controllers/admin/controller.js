import AdminService from "../../services/admin.service";
import authenticationService from "../../services/authentication.service";

export class Controller {
  async signIn(req, res) {
    const { email, password } = req.body;

    const user = await AdminService.signIn(email, password);
    res.status(200).send(user);
  }
  async addExaminer(req, res) {
    const user = await AdminService.addExaminer(req.body.user);
    res.status(200).send(user);
  }
  async getExaminers(req, res) {
    const { limit } = req.query;
    if (!limit) limit = 10;
    const users = await AdminService.getExaminers(limit);
    res.status(200).send(users);
  }
  async getExaminersUsingId(req, res) {
    const { id } = req.params;
    const user = await AdminService.getExaminersUsingId(id);
    res.status(200).send(user);
  }
  async getAllExaminers(req, res) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = await authenticationService.verifyToken(token);
      console.log(decoded);
      if (decoded) {
        const users = await AdminService.getAllExaminers();
        res.status(200).send(users);
      }
    } catch (err) {
      res.status(401).send("Unauthorized");
    }
  }
  async addAdmin(req, res) {
    const user = await AdminService.addAdmin(req.body);
    res.status(200).send(user);
  }
  async updateExaminer(req, res) {
    const user = await AdminService.updateExaminer(req.body.user);
    res.status(200).send(user);
  }
  async updateAdmin(req, res) {
    const user = await AdminService.updateAdmin(req.body);
    res.status(200).send(user);
  }
  async getAdmins(req, res) {
    const admins = await AdminService.getAdmins();
    res.status(200).send(admins);
  }
  async getPassword(req, res) {
    const { email } = req.body;
    const password = await AdminService.getPassword(email);
    res.status(200).send(password);
  }
  async verifyToken(req, res) {
    const { token } = req.body;
    const decoded = await authenticationService.verifyToken(token);
    if (decoded) {
      res.status(200).send(decoded);
    } else {
      res.status(401).send("Unauthorized");
    }
  }
}
export default new Controller();
