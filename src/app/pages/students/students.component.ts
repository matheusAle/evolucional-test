import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {BehaviorSubject, interval, Observable, Subject, Subscription} from 'rxjs';
import {debounce, map, switchMap, tap} from 'rxjs/operators';
import {IDegree} from '../../interfaces/Degree.interface';
import {IStudentPopulated} from '../../interfaces/Student.interface';
import {ClassService} from '../../state/data/class.service';
import {DegreeService} from '../../state/data/degree.service';
import {StudentService} from '../../state/data/student.service';
import {StudentDeleteDialogComponent} from '../../domain/student-delete-dialog/student-delete-dialog.component';
import {StudentFormDialogComponent} from '../../domain/student-form-dialog/student-form-dialog.component';
import {StudentGenerateDialogComponent} from '../../domain/student-generate-dialog/student-generate-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  students$ = this.studentService.studentPopulated$;
  degrees: number[] = [];
  classes: number[] = [];

  constructor(
    private studentService: StudentService,
  ) { }
}
