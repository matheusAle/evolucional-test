import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {IStudent} from '../../interfaces/Student.interface';
import {StudentService} from '../../state/data/student.service';

@Component({
  selector: 'app-student-delete-dialog',
  template: `
    <h1 mat-dialog-title>
      Deletar o Estudante
    </h1>
    <p mat-dialog-content>
      Tem certeza de que deseja remover o estudante <b>{{ student.name }}</b>?<br>
      Essa acão nao poderá ser desfeita.
    </p>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-button mat-dialog-close color="warn" (click)="remove()">Sim, Remover</button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 300px;
      text-align: center;
    }

    .mat-dialog-actions {
      display: flex;
      justify-content: center;
    }
  `]
})
export class StudentDeleteDialogComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<StudentDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public student: IStudent
  ) { }

  ngOnInit(): void {
  }

  remove(): void {
    const subs = this.studentService.delete(this.student)
      .subscribe(() => {
        subs.unsubscribe();
        this.snackBar.open('Estudante removido com sucesso!', null, { duration: 3000 });
      });
  }

}
