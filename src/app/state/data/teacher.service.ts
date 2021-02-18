import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {ITeacher} from '../../interfaces/Teacher.interface';

@Injectable({ providedIn: 'root' })
export class TeacherService extends EntityCollectionServiceBase<ITeacher> {



  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Teacher', serviceElementsFactory);
  }
}
