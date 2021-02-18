import {Component, Input, OnInit} from '@angular/core';
import {Dictionary} from '@ngrx/entity';
import {IDegree} from '../../interfaces/Degree.interface';
import {IRelationshipDegree} from '../../interfaces/Relationship.interface';

@Component({
  selector: 'app-teacher-degrees',
  template: `
    <mat-chip-list>
      <mat-chip *ngFor="let degree of items">{{ degrees[degree.degreeId]?.name }}</mat-chip>
    </mat-chip-list>
  `,
  styleUrls: ['./teacher-degrees.component.scss']
})
export class TeacherDegreesComponent implements OnInit {

  @Input() degrees: Dictionary<IDegree>;
  @Input() items: IRelationshipDegree[];

  constructor() { }

  ngOnInit(): void {
  }

}
