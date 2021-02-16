import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {BehaviorSubject, interval, Observable, Subject, Subscription} from 'rxjs';
import {debounce, map, switchMap} from 'rxjs/operators';
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
export class StudentsComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscription = new Subscription();
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: (keyof IStudentPopulated | 'actions')[] = ['name', 'class', 'degree', 'actions'];
  dataSource = new MatTableDataSource();

  search = new Subject<string>();

  degrees$ = this.degreeService.entities$;
  classes$ = this.classService.entities$;
  filter = new BehaviorSubject<any>(null);
  degrees: number[] = [];
  classes: number[] = [];

  constructor(
    private studentService: StudentService,
    private classService: ClassService,
    private degreeService: DegreeService,
    private dialog: MatDialog
  ) {
    this.subscription.add(
      this.filter
        .pipe(
          switchMap(() => studentService.studentPopulated$),
          map((students) => (
            this.degrees?.length || this.classes?.length
              ? students?.filter(item => this.degrees?.includes(item.degreeId) || this.classes?.includes(item.classId))
              : students
          ))
        )
        .subscribe(data => {
          this.dataSource.data = data;
        })
    );
    this.subscription.add(
      this.search
        .pipe(
          debounce(() => interval(300))
        )
        .subscribe(str => {
          this.dataSource.filter = str;
        })
    );
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.filterPredicate = (item: IStudentPopulated, property) => {
      return `${item.name}${item.degree.name}${item.class.name}`.toLowerCase().includes(String(property || '').toLowerCase());
    };
    this.dataSource.sortingDataAccessor = (item: IStudentPopulated, property) => {
      switch (property) {
        case 'degree': return item.degree.name;
        case 'class': return item.class.name;
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

  openStudentDialog(student?: IStudentPopulated): void {
    this.dialog.open(StudentFormDialogComponent, {
      data: JSON.parse(JSON.stringify({ ...(student || {}), degree: undefined, class: undefined }))
    });
  }

  openStudentDeleteDialog(student: IStudentPopulated): void {
    this.dialog.open(StudentDeleteDialogComponent, {
      data: student
    });
  }

  openGenerateStudents(): void {
    this.dialog.open(StudentGenerateDialogComponent);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.filter.complete();
    this.search.complete();
  }
}
