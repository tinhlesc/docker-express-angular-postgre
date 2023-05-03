import { StudentModel } from "../models/student.model";

const studentModel = new StudentModel();

export class StudentService {
  public async getAllStudents(): Promise<any[]> {
    return await studentModel.getAllStudents();
  }

  public async getStudentById(id: number): Promise<any> {
    return await studentModel.getStudentById(id);
  }

  public async createStudent(student: any): Promise<any> {
    return await studentModel.createStudent(student);
  }

  public async updateStudent(id: number, student: any): Promise<any> {
    return await studentModel.updateStudent(id, student);
  }

  public async deleteStudent(id: number): Promise<void> {
    return await studentModel.deleteStudent(id);
  }
}
