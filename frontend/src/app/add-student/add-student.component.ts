import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student();

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {}

  addStudent(): void {
    this.studentService.addStudent(this.student).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
