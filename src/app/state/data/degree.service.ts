import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {IDegree} from '../../interfaces/Degree.interface';

@Injectable({ providedIn: 'root' })
export class DegreeService extends EntityCollectionServiceBase<IDegree> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Degree', serviceElementsFactory);
  }
}
