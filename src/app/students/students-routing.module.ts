import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsComponent} from './students.component';
import {StudentsModule} from './students.module';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent
  }
];

@NgModule({
  imports: [StudentsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
