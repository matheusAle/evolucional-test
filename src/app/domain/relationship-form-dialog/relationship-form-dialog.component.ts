import {animate, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ClassService} from '../../state/data/class.service';
import {DegreeService} from '../../state/data/degree.service';
import {MatterService} from '../../state/data/matter.service';
import {RelationshipService} from '../../state/data/relationship.service';
import {StudentService} from '../../state/data/student.service';
import {TeacherService} from '../../state/data/teacher.service';
import {StudentFormDialogComponent} from '../student-form-dialog/student-form-dialog.component';

@Component({
  selector: 'app-relationship-form-dialog',
  templateUrl: './relationship-form-dialog.component.html',
  styleUrls: ['./relationship-form-dialog.component.scss'],
  animations: [
    trigger('degree', [
      transition(':enter', [
        style({ height: 0, opacity: 0, overflow: 'hidden' }),
        animate(250, style({ height: '*', opacity: 1, overflow: 'hidden' }))
      ]),

      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate(250, style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class RelationshipFormDialogComponent implements OnInit {

  form = new FormGroup({
    teacherId: new FormControl(null, Validators.required),
    matterId: new FormControl(null, Validators.required),
    degrees: new FormArray([
      this.getNewDegree()
    ])
  });

  teachers$ = this.teacherService.entities$;
  matters$ = this.mattersService.entities$;

  degrees$ = this.degreeService.entities$;
  classes$ = this.classService.entities$;

  constructor(
    private teacherService: TeacherService,
    private mattersService: MatterService,
    private relationshipService: RelationshipService,
    private classService: ClassService,
    private degreeService: DegreeService,
    public dialogRef: MatDialogRef<StudentFormDialogComponent>,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  get degreesArray(): FormArray {
    return this.form.controls.degrees as FormArray;
  }

  getNewDegree(): FormGroup {
    return new FormGroup({
      degreeId: new FormControl(null, Validators.required),
      classes: new FormControl([], Validators.required),
    });
  }

  addDegree(): void {
    this.degreesArray.push(this.getNewDegree());
  }

  removeDegree(index): void {
    this.degreesArray.removeAt(index);
  }

  save(): void {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.invalid) {
      return;
    }

    const sub = this.relationshipService.add(this.form.value)
      .subscribe(() => {
        sub.unsubscribe();
        this.snackBar.open('Relacionamento criado com sucesso!', null, { duration: 3000 });
      });
    this.dialogRef.close();
  }
}
