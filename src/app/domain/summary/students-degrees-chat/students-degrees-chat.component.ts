import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as Chart from 'chart.js';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import { HueCircle19 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';

import {combineLatest, Subscription} from 'rxjs';
import {DegreeService} from '../../../state/data/degree.service';
import {StudentService} from '../../../state/data/student.service';

@Component({
  selector: 'app-students-degrees-chat',
  template: `
    <canvas #ctx></canvas>
  `,
  styles: [`
    :host {
      display: block;
      width: 600px;
    }
  `]
})
export class StudentsDegreesChatComponent implements OnInit, OnDestroy {

  @ViewChild('ctx', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private chart: Chart;

  private sub = new Subscription();

  constructor(
    private degreeService: DegreeService,
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{ data: [] }]
      },
      options: {
        legend: {
          position: 'right'
        },
        plugins: {
          colorschemes: {
            scheme: HueCircle19
          }
        }
      }
    });

    this.sub.add(
      combineLatest([
        this.degreeService.entities$,
        this.studentService.entities$,
      ])
        .subscribe(([degrees, students]) => {

          const count = students.reduce((set, { degreeId }) => {
            return set.set(degreeId, (set.get(degreeId) || 0) + 1);
          }, new Map<number, number>());

          this.chart.data = {
            labels: degrees.map(degree => degree.name),
            datasets: [{
              data: degrees.map(({id}) => count.get(id) || 0),
            }]
          };

          this.chart.update();
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.chart.destroy();
  }
}
