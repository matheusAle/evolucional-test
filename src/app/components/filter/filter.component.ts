import {Component, Input, OnInit, EventEmitter, Output, HostBinding} from '@angular/core';
import {ClassService} from '../../state/data/class.service';
import {DegreeService} from '../../state/data/degree.service';

@Component({
  selector: 'app-filter',
  template: `
    <mat-form-field appearance="outline" class="search" *ngIf="allowSearch">
      <mat-label>{{ searchLabel }}</mat-label>
      <input
        matInput
        [ngModel]="''"
        (ngModelChange)="search.next($event)"
        autocomplete="off"
      >
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Classe</mat-label>
      <mat-select multiple [(ngModel)]="classes" (ngModelChange)="classesChange.emit($event)">
        <mat-option *ngFor="let clasz of classes$ | async" [value]="clasz.id">
          {{clasz.name}}
        </mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Gradução</mat-label>
      <mat-select multiple [(ngModel)]="degrees" (ngModelChange)="degreesChange.emit($event)">
        <mat-option *ngFor="let degree of degrees$ | async" [value]="degree.id">
          {{degree.name}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @HostBinding('class') class = 'mat-elevation-z2';

  @Input() allowSearch = true;
  @Input() searchLabel: string;
  @Output() search = new EventEmitter<string>();

  @Input() classes: number[];
  @Output() classesChange = new EventEmitter<number[]>();

  @Input() degrees: number[];
  @Output() degreesChange = new EventEmitter<number[]>();

  degrees$ = this.degreeService.entities$;
  classes$ = this.classService.entities$;

  constructor(
    private classService: ClassService,
    private degreeService: DegreeService,
  ) { }

  ngOnInit(): void {
  }

}
