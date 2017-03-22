import { BasicReport } from '../report/report';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-report',
  template: `
    <div style="border: 1px solid black">
    <h3>{{basicReport.name.value}}</h3>
    <app-generic-basic-report [entries]="basicReport.entries" [subReports]="basicReport.subReports">
    </app-generic-basic-report> 
    </div>
    `

})
export class BasicReportComponent {
  @Input() basicReport: BasicReport;
}
