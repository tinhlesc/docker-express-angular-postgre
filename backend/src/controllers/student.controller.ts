import { Request, Response } from "express";
import { StudentService } from "../services/student.service";

const studentService = new StudentService();

export class StudentController {
  public async getAllStudents(req: Request, res: Response): Promise<void> {
    try {
      const students = await studentService.getAllStudents();
      res.status(200).json(students);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getStudentById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    try {
      const student = await studentService.getStudentById(id);
      res.status(200).json(student);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async createStudent(req: Request, res: Response): Promise<void> {
    try {
      const student = await studentService.createStudent(req.body);
      res.status(201).json(student);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async updateStudent(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    try {
      const student = await studentService.updateStudent(id, req.body);
      res.status(200).json(student);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async deleteStudent(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    try {
      await studentService.deleteStudent(id);
      res.status(200).json({ message: "Student deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}