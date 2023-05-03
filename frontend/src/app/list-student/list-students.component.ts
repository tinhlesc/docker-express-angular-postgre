import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(): void {
    this.studentService.getStudents().subscribe((students: Student[]) => {
      this.students = students;
    });
  }

  editStudent(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents();
    });
  }
}
