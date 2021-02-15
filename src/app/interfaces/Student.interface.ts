import {IClass} from './Class.interface';
import {IDegree} from './Degree.interface';

export interface IStudent {
  id: number;
  name: string;
  ra: number;
  classId: number;
  degreeId: number;
}

export interface IStudentPopulated extends IStudent {
  degree: IDegree;
  class: IClass;
}
