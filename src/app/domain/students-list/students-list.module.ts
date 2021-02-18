import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {HighlightModule} from '../../pipes/highlight/highlight.module';
import {StudentDeleteDialogModule} from '../student-delete-dialog/student-delete-dialog.module';
import {StudentFormDialogModule} from '../student-form-dialog/student-form-dialog.module';
import {StudentGenerateDialogModule} from '../student-generate-dialog/student-generate-dialog.module';
import { StudentsListComponent } from './students-list.component';



@NgModule({
  declarations: [StudentsListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    HighlightModule,
    StudentFormDialogModule,
    StudentDeleteDialogModule,
    StudentGenerateDialogModule,
    MatPaginatorModule,
  ],
  exports: [StudentsListComponent]
})
export class StudentsListModule { }
