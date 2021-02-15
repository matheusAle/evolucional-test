import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';
import {IStudent} from '../interfaces/Student.interface';
import {ClassService} from '../state/data/class.service';
import {DegreeService} from '../state/data/degree.service';
import {StudentService} from '../state/data/student.service';
import * as Faker from 'faker';

@Component({
  selector: 'app-student-generate-dialog',
  template: `
    <h1 mat-dialog-title>
      Gerar Estudantes
    </h1>
    <p mat-dialog-content>
      Esses estudantes serão removidos assim que essa pagina for fechada.
    </p>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-button mat-dialog-close color="warn" (click)="generate()">Okay, Gerar mesmo assim</button>
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
      justify-content: space-between;
    }
  `]
})
export class StudentGenerateDialogComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private classService: ClassService,
    private degreeService: DegreeService,
  ) { }

  ngOnInit(): void {
  }

  async generate(): Promise<void> {
    const degrees = await this.degreeService.entities$.pipe(take(1)).toPromise();
    const classes = await this.classService.entities$.pipe(take(1)).toPromise();

    const students: IStudent[] = new Array(300).fill(0).map((_, index) => ({
      id: String(Date.now() + index),
      name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
      classId: Faker.random.arrayElement(classes).id,
      degreeId: Faker.random.arrayElement(degrees).id,
    } as IStudent & { id: string }));

    this.studentService.addManyToCache(students);
  }
}
