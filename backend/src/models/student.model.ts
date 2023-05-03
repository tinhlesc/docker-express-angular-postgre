import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export class StudentModel {
  public async getAllStudents(): Promise<any[]> {
    const query = "SELECT * FROM students ORDER BY id ASC";
    const result = await pool.query(query);
    return result.rows;
  }

  public async getStudentById(id: number): Promise<any> {
    const query = "SELECT * FROM students WHERE id = $1";
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  public async createStudent(student: any): Promise<any> {
    const query = "INSERT INTO students (name, age, email) VALUES ($1, $2, $3) RETURNING *";
    const values = [student.name, student.age, student.email];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  public async updateStudent(id: number, student: any): Promise<any> {
    const query = "UPDATE students SET name = $1, age = $2, email = $3 WHERE id = $4 RETURNING *";
    const values = [student.name, student.age, student.email, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  public async deleteStudent(id: number): Promise<void> {
    const query = "DELETE FROM students WHERE id = $1";
    await pool.query(query, [id]);
  }
}
