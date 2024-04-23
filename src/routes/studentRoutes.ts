import express from "express";
import StudentController from "../controllers/StudentController";

const studentRoutes = (studentController: StudentController) => {
  const router = express.Router();

  router.get("/", (req, res) => studentController.getStudents(req, res));
  router.post("/", (req, res) => studentController.createStudent(req, res));

  return router;
};

export default studentRoutes;
