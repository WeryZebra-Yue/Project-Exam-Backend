import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .post("/signIn", controller.signIn)
  .post("/addExaminer", controller.addExaminer)
  .get("/getExaminers", controller.getExaminers)
  .get("/getExaminers/:id", controller.getExaminersUsingId)
  .get("/getAllExaminers", controller.getAllExaminers);
