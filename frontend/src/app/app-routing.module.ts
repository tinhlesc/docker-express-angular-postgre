import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentsComponent } from './list-student/list-students.component';

const routes: Routes = [
  { path: '', component: ListStudentsComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'edit/:id', component: EditStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
