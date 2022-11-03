import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .post("/auth", controller.signIn)
  .post("/addExaminer", controller.addExaminer)
  .get("/getExaminers", controller.getExaminers)
  .get("/getExaminers/:id", controller.getExaminersUsingId)
  .get("/getAllExaminers", controller.getAllExaminers)
  .post("/addAdmin", controller.addAdmin)
  .post("/updateExaminer", controller.updateExaminer)
  .post("/updateAdmin", controller.updateAdmin)
  .get("/getAdmins", controller.getAdmins)
  .post("/getPassword", controller.getPassword)
  .post("/verifyToken", controller.verifyToken);
