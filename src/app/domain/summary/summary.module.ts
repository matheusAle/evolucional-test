import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { StudentsDegreesChatComponent } from './students-degrees-chat/students-degrees-chat.component';



@NgModule({
  declarations: [SummaryComponent, StudentsDegreesChatComponent],
  exports: [
    SummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SummaryModule { }
