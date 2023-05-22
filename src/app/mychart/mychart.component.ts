import { DiagnosticCrudService } from './../services/Diagnostic/diagnostic-crud.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PatientCrudService } from '../services/Patient/patient-crud.service';

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit{
  diag:any=[];
  pat:any=[];
  constructor(private diagser:DiagnosticCrudService , private patser:PatientCrudService) {
    Chart.register(...registerables);
  }
  ngOnInit(): void {
      this.diagser.getdiagnostics().subscribe(res=>{

      this.diag = res;
    })
    this.patser.getpatients().subscribe(res=>{

      this.pat = res;
    })
    this.RenderChart();

  }

  RenderChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.pat,
          datasets: [{
            label: '# of Votes',
            data: this.diag,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

}
