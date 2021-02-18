import {EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig} from '@ngrx/data';
import {EntityMetadata} from '@ngrx/data/src/entity-metadata/entity-metadata';
import {environment} from '../environments/environment';
import {IClass} from './interfaces/Class.interface';
import {IDegree} from './interfaces/Degree.interface';
import {IMatter} from './interfaces/Matter.interface';
import {IRelationship} from './interfaces/Relationship.interface';
import {IStudent} from './interfaces/Student.interface';
import {ITeacher} from './interfaces/Teacher.interface';

const entityMetadata: EntityMetadataMap = {
  Class: {
    selectId: model => model.id
  } as EntityMetadata<IClass>,
  Student: {
    selectId: model => model.id
  } as EntityMetadata<IStudent>,
  Degree: {
    selectId: model => model.id
  } as EntityMetadata<IDegree>,
  Teacher: {
    selectId: model => model.id
  } as EntityMetadata<ITeacher>,
  Relationship: {
    selectId: model => model.id,
  } as EntityMetadata<IRelationship>,
  Matter: {
    selectId: model => model.id
  } as EntityMetadata<IMatter>,
};

const pluralNames = {
  Class: 'classes',
  Student: 'students',
  Degree: 'degrees',
  Teacher: 'teachers',
  Relationship: 'relationship',
  Matter: 'matters',
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.api,
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
