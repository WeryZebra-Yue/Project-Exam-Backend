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
  .post("/deleteExaminer", controller.deleteExaminer)
  .post("/updateExaminer", controller.updateExaminer)
  .post("/updateAdmin", controller.updateAdmin)
  .get("/getAdmins", controller.getAdmins)
  .post("/getPassword", controller.getPassword)
  .post("/verifyToken", controller.verifyToken)
  .post("/addMultipleUsers", controller.addMultipleUsers)
  .get("/getUniversities", controller.getUniversities)
  .post("/addUniversity", controller.addUniversity)
  .post("/updateUniversity", controller.updateUniversity)
  .get("/getMetaData", controller.getMetaData)
  .post("/assign", controller.assign)
  .get("/assignments", controller.getAssignments)
  .post("/updateAssignment", controller.updateAssignment)
  .post("/deleteAssignment", controller.deleteAssignment);
