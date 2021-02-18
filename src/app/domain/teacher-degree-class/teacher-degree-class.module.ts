import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { TeacherDegreeClassComponent } from './teacher-degree-class.component';



@NgModule({
  declarations: [TeacherDegreeClassComponent],
    imports: [
        CommonModule,
        MatExpansionModule
    ],
  exports: [TeacherDegreeClassComponent]
})
export class TeacherDegreeClassModule { }
