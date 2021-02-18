import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {EcoFabSpeedDialModule} from '@ecodev/fab-speed-dial';
import {FilterModule} from '../../components/filter/filter.module';
import {ClassStudentsModule} from '../../domain/class-students/class-students.module';
import {StudentsListModule} from '../../domain/students-list/students-list.module';
import {TeacherDegreeClassModule} from '../../domain/teacher-degree-class/teacher-degree-class.module';
import {TeacherDegreesModule} from '../../domain/teacher-degrees/teacher-degrees.module';
import {HighlightModule} from '../../pipes/highlight/highlight.module';
import { TeachersComponent } from './teachers.component';


@NgModule({
  declarations: [TeachersComponent],
    imports: [
        CommonModule,
        EcoFabSpeedDialModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        HighlightModule,
        ScrollingModule,
        CdkAccordionModule,
        MatExpansionModule,
        TeacherDegreesModule,
        MatChipsModule,
        MatTabsModule,
        TeacherDegreeClassModule,
        StudentsListModule,
        ClassStudentsModule,
        FilterModule,
    ]
})
export class TeachersModule { }
