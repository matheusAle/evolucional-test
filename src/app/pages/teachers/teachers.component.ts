import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {BehaviorSubject} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ClassService} from '../../state/data/class.service';
import {DegreeService} from '../../state/data/degree.service';
import {MatterService} from '../../state/data/matter.service';
import {RelationshipService} from '../../state/data/relationship.service';
import {StudentService} from '../../state/data/student.service';
import {TeacherService} from '../../state/data/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  filter = new BehaviorSubject<any>(null);
  degrees: number[] = [];
  classes: number[] = [];
  search: string;

  degrees$ = this.degreeService.entityMap$;
  classes$ = this.classService.entityMap$;
  teachers$ = this.teacherService.entityMap$;
  matters$ = this.mattersService.entityMap$;
  relationship$ = this.filter.pipe(
    switchMap(() => this.relationshipService.shallowEntities$),
    map(entities =>
      this.degrees?.length || this.classes?.length
        ? entities
          .filter(item =>
            this.degrees?.find(id => item.degreesList.includes(id))
            || this.classes?.find(id => item.classesList.includes(id))
          )
        : entities
    ),
  );

  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private mattersService: MatterService,
    private relationshipService: RelationshipService,
    private classService: ClassService,
    private degreeService: DegreeService,
  ) {
  }

  ngOnInit(): void {

  }

}
