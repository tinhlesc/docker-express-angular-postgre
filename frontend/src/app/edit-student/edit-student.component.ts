import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  student: Student = new Student();
  id: any;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as any);
    this.getStudent(this.id);
  }

  getStudent(id: number): void {
    this.studentService.getStudent(id).subscribe((student: Student) => {
      this.student = student;
    });
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.id, this.student).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
