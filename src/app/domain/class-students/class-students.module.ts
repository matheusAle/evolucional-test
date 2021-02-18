import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentsListModule} from '../students-list/students-list.module';
import { ClassStudentsComponent } from './class-students.component';



@NgModule({
  declarations: [ClassStudentsComponent],
    imports: [
        CommonModule,
        StudentsListModule
    ],
  exports: [ClassStudentsComponent]
})
export class ClassStudentsModule { }
