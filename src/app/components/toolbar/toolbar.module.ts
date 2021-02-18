import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RelationshipFormDialogModule} from '../../domain/relationship-form-dialog/relationship-form-dialog.module';
import {StudentFormDialogModule} from '../../domain/student-form-dialog/student-form-dialog.module';
import {StudentGenerateDialogModule} from '../../domain/student-generate-dialog/student-generate-dialog.module';
import { ToolbarComponent } from './toolbar.component';



@NgModule({
  declarations: [ToolbarComponent],
  exports: [
      ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    StudentFormDialogModule,
    StudentGenerateDialogModule,
    RelationshipFormDialogModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class ToolbarModule { }
