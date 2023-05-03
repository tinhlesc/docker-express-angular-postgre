import { Router } from "express";
import { StudentController } from "../controllers/student.controller";

const studentController = new StudentController();
const router = Router();

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

export default router;
