import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {IStudent} from '../../interfaces/Student.interface';
import {ClassService} from '../../state/data/class.service';
import {DegreeService} from '../../state/data/degree.service';
import {StudentService} from '../../state/data/student.service';

@Component({
  selector: 'app-student-form-dialog',
  templateUrl: './student-form-dialog.component.html',
  styleUrls: ['./student-form-dialog.component.scss']
})
export class StudentFormDialogComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    classId: new FormControl(null, [Validators.required]),
    degreeId: new FormControl(null, [Validators.required]),
  });

  degrees$ = this.degreeService.entities$;
  classes$ = this.classService.entities$;

  constructor(
    private studentService: StudentService,
    private classService: ClassService,
    private degreeService: DegreeService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<StudentFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public student?: IStudent
  ) {

    if (this.student) {
      Object.entries(this.form.controls).forEach(([prop, control]) => {
        control.setValue(student[prop]);
      });
    }
  }

  ngOnInit(): void {
  }

  save(): void {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.invalid) {
      return;
    }

    const body: IStudent = {
      ...this.student,
      ...this.form.value,
    };

    if (body.id && typeof body.id === 'string') {
      delete body.id;
    }

    const sub = (body.id ? this.studentService.update(body) : this.studentService.add(body))
      .subscribe(() => {
        sub.unsubscribe();
        if (this.student?.id && typeof this.student.id === 'string') {
          this.studentService.removeOneFromCache(this.student);
        }
        if (body.id) {
          this.snackBar.open('Estudante atualizado com sucesso!', null, { duration: 3000 });
        } else {
          this.snackBar.open('Estudante cadastrado com sucesso!', null, { duration: 3000 });
        }
        this.dialogRef.close();
      });
  }
}
