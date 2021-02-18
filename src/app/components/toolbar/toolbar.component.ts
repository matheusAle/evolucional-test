import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RelationshipFormDialogComponent} from '../../domain/relationship-form-dialog/relationship-form-dialog.component';
import {StudentDeleteDialogComponent} from '../../domain/student-delete-dialog/student-delete-dialog.component';
import {StudentFormDialogComponent} from '../../domain/student-form-dialog/student-form-dialog.component';
import {StudentGenerateDialogComponent} from '../../domain/student-generate-dialog/student-generate-dialog.component';
import {IStudentPopulated} from '../../interfaces/Student.interface';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <span>My Application</span>
      <div>
        <button mat-icon-button matTooltip="Novo estudante" (click)="openStudentDialog()">
          <mat-icon>person</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Novo Relacionamento" (click)="openNewRelationship()">
          <mat-icon>mediation</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Gerar mais 300 estudantes" (click)="openGenerateStudents()">
          <mat-icon>shuffle</mat-icon>
        </button>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openStudentDialog(): void {
    this.dialog.open(StudentFormDialogComponent);
  }

  openGenerateStudents(): void {
    this.dialog.open(StudentGenerateDialogComponent);
  }
  openNewRelationship(): void {
    this.dialog.open(RelationshipFormDialogComponent);
  }
}
