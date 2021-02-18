import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {BehaviorSubject, interval, Subject, Subscription} from 'rxjs';
import {debounce, map, switchMap} from 'rxjs/operators';
import {IStudentPopulated} from '../../interfaces/Student.interface';
import {ClassService} from '../../state/data/class.service';
import {DegreeService} from '../../state/data/degree.service';
import {StudentDeleteDialogComponent} from '../student-delete-dialog/student-delete-dialog.component';
import {StudentFormDialogComponent} from '../student-form-dialog/student-form-dialog.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() items: IStudentPopulated[] = [];

  private subscription = new Subscription();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: (keyof IStudentPopulated | 'actions')[] = ['name', 'class', 'degree', 'actions'];
  dataSource = new MatTableDataSource();

  search = new Subject<string>();
  filter = new BehaviorSubject<any>(null);
  degrees: number[] = [];
  classes: number[] = [];

  constructor(
    private classService: ClassService,
    private degreeService: DegreeService,
    private dialog: MatDialog
  ) {
    this.subscription.add(
      this.filter
        .pipe(
          map(() => this.items),
          switchMap(async (students) => (
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

  ngOnChanges({ items }: SimpleChanges): void {
    if (items) {
      this.filter.next('');
    }
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
    this.dataSource.paginator = this.paginator;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
}
