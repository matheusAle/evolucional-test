import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {StudentService} from '../../state/data/student.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  count$ = this.studentService.entities$.pipe(
    map(list => list?.length || 0)
  )

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

}
