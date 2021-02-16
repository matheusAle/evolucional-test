import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { StudentGenerateDialogComponent } from './student-generate-dialog.component';



@NgModule({
  declarations: [StudentGenerateDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [StudentGenerateDialogComponent]
})
export class StudentGenerateDialogModule { }
