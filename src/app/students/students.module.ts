import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {EcoFabSpeedDialModule} from '@ecodev/fab-speed-dial';
import {HighlightModule} from '../pipes/highlight/highlight.module';
import {StudentDeleteDialogModule} from '../student-delete-dialog/student-delete-dialog.module';
import {StudentFormDialogModule} from '../student-form-dialog/student-form-dialog.module';
import {StudentGenerateDialogModule} from '../student-generate-dialog/student-generate-dialog.module';

import { StudentsComponent } from './students.component';


@NgModule({
  declarations: [StudentsComponent],
  exports: [StudentsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HighlightModule,
    MatSelectModule,
    EcoFabSpeedDialModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    StudentFormDialogModule,
    StudentDeleteDialogModule,
    StudentGenerateDialogModule
  ]
})
export class StudentsModule { }
