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
    await AdminService.updateMetaData();
    res.status(200).send(user);
  }
  async deleteExaminer(req, res) {
    const id = await AdminService.deleteExaminer(req.body.id);
    await AdminService.updateMetaData();
    res.status(200).send(id);
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
    await AdminService.updateMetaData();
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

  async addMultipleUsers(req, res) {
    const users = await AdminService.addMultipleUsers(req.body.users);
    await AdminService.updateMetaData();
    res.status(200).send(users);
  }
  // async getUniversity(req, res) {
  //   const { name } = req.body;
  //   const university = await AdminService.getUniversity(name);
  //   res.status(200).send(university);
  // }
  async addUniversity(req, res) {
    const university = await AdminService.addUniversity(req.body);
    res.status(200).send(university);
  }
  async getUniversities(req, res) {
    const universities = await AdminService.getUniversities();
    res.status(200).send(universities);
  }
  async updateUniversity(req, res) {
    const university = await AdminService.updateUniversity(req.body);
    res.status(200).send(university);
  }
  async getMetaData(req, res) {
    const metaData = await AdminService.getMetaData();
    res.status(200).send(metaData);
  }
}
export default new Controller();
