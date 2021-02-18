import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {TeacherDegreesComponent} from './teacher-degrees.component';



@NgModule({
  declarations: [TeacherDegreesComponent],
  exports: [TeacherDegreesComponent],
  imports: [
    CommonModule,
    MatChipsModule
  ]
})
export class TeacherDegreesModule { }
