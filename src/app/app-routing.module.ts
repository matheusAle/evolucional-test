import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'students',
    loadChildren: () => import('./pages/students/students-routing.module').then(m => m.StudentsRoutingModule),
  },
  {
    path: 'teachers',
    loadChildren: () => import('./pages/teachers/teachers-routing.module').then(m => m.TeachersRoutingModule),
  },
  {
    path: '**',
    redirectTo: '/students'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
