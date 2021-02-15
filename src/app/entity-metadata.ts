import {EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig} from '@ngrx/data';
import {EntityMetadata} from '@ngrx/data/src/entity-metadata/entity-metadata';
import {environment} from '../environments/environment';
import {IClass} from './interfaces/Class.interface';
import {IDegree} from './interfaces/Degree.interface';
import {IStudent} from './interfaces/Student.interface';

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
};

const pluralNames = {
  Class: 'classes',
  Student: 'students',
  Degree: 'degrees'
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.api,
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
