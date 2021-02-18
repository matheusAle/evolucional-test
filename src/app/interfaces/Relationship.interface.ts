

export interface IRelationshipDegreeClass {
  classId?: number;
  classPosition?: number;
}

export interface IRelationshipDegree {
  degreeId: number;
  classes: IRelationshipDegreeClass[];
}

export interface IRelationship {
  id: number;
  teacherId: number;
  matterId: number;
  degrees: IRelationshipDegree[];
}


export interface IShallowRelationship extends IRelationship {
  degreesList: number[];
  classesList: number[];
}
