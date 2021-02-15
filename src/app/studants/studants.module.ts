import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudantsRoutingModule } from './studants-routing.module';
import { StudantsComponent } from './studants.component';


@NgModule({
  declarations: [StudantsComponent],
  imports: [
    CommonModule,
    StudantsRoutingModule
  ]
})
export class StudantsModule { }
