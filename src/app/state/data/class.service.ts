import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {IClass} from '../../interfaces/Class.interface';

@Injectable({ providedIn: 'root' })
export class ClassService extends EntityCollectionServiceBase<IClass> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Class', serviceElementsFactory);
  }
}
