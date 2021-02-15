import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {combineLatest, Observable} from 'rxjs';
import {combineAll, map} from 'rxjs/operators';
import {IStudent, IStudentPopulated} from '../../interfaces/Student.interface';
import {ClassService} from './class.service';
import {DegreeService} from './degree.service';

@Injectable({ providedIn: 'root' })
export class StudentService extends EntityCollectionServiceBase<IStudent> {

  studentPopulated$: Observable<IStudentPopulated[]> = combineLatest([
    this.entities$,
    this.degreeService.entityMap$,
    this.classService.entityMap$,
  ]).pipe(
    map(([students, degreeMap, classMap]) =>
      students.map<IStudentPopulated>(student => ({
        ...student,
        class: classMap[student.classId],
        degree: degreeMap[student.degreeId]
      }))
    )
  );

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private classService: ClassService,
    private degreeService: DegreeService,
  ) {
    super('Student', serviceElementsFactory);
  }
}
