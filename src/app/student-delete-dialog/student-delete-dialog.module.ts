import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { StudentDeleteDialogComponent } from './student-delete-dialog.component';



@NgModule({
  declarations: [StudentDeleteDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [StudentDeleteDialogComponent]
})
export class StudentDeleteDialogModule { }
