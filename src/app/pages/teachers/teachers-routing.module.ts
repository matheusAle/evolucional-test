import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeachersComponent} from './teachers.component';
import {TeachersModule} from './teachers.module';

const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
  }
];

@NgModule({
  imports: [TeachersModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
