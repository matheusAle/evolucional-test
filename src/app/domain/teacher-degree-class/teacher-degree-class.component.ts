import {Component, Input, OnInit} from '@angular/core';
import {Dictionary} from '@ngrx/entity';
import {IClass} from '../../interfaces/Class.interface';
import {IDegree} from '../../interfaces/Degree.interface';
import {IRelationshipDegreeClass} from '../../interfaces/Relationship.interface';

@Component({
  selector: 'app-teacher-degree-class',
  templateUrl: './teacher-degree-class.component.html',
  styleUrls: ['./teacher-degree-class.component.scss']
})
export class TeacherDegreeClassComponent implements OnInit {

  @Input() classes: Dictionary<IClass>;
  @Input() item: IRelationshipDegreeClass;

  constructor() { }

  ngOnInit(): void {
  }

}
