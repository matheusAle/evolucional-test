import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IStudentPopulated} from '../../interfaces/Student.interface';
import {StudentService} from '../../state/data/student.service';

@Component({
  selector: 'app-class-students',
  template: `
    <app-students-list
      [items]="students$ | async"
    ></app-students-list>
  `,
  styleUrls: ['./class-students.component.scss']
})
export class ClassStudentsComponent implements OnInit {

  @Input() classId: number;
  @Input() degreeId: number;
  students$: Observable<IStudentPopulated[]>;

  constructor(
    private students: StudentService
  ) { }

  ngOnInit(): void {
    this.students$ = this.students.ofDegree(this.degreeId, this.classId);
  }

}
