import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IRelationship, IShallowRelationship} from '../../interfaces/Relationship.interface';

@Injectable({ providedIn: 'root' })
export class RelationshipService extends EntityCollectionServiceBase<IRelationship> {

  shallowEntities$: Observable<IShallowRelationship[]> = this.entities$.pipe(
    map(entities => {
      return entities.map<IShallowRelationship>(entity => (<IShallowRelationship>{
        ...entity.degrees.reduce<Partial<IShallowRelationship>>((obj, item) => {
          obj.degreesList.push(item.degreeId);
          obj.classesList.push(...item.classes.map(c => c.classId || c.classPosition));
          return obj;
        }, { ...entity, degreesList: [], classesList: [] })
      }));
    })
  );

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Relationship', serviceElementsFactory);
  }
}
