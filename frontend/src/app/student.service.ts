import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseURL = 'http://localhost:10001/students';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseURL);
  }

  getStudent(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  addStudent(student: Student): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, student);
  }

  updateStudent(id: number, student: Student): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
