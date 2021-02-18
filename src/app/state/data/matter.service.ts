import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {IMatter} from '../../interfaces/Matter.interface';

@Injectable({ providedIn: 'root' })
export class MatterService extends EntityCollectionServiceBase<IMatter> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Matter', serviceElementsFactory);
  }
}
