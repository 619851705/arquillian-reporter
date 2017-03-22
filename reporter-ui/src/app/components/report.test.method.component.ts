import { TestMethodReport } from '../report/report';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-method-report',
  template: `<h1>Test method report: {{testMethodReport.name.value}}</h1>
    <p>start: {{testMethodReport.start}}</p>
    <p>stop: {{testMethodReport.stop}}</p>

    <h3>Configuration:</h3>
    <div *ngIf='testMethodReport?.configuration'>
      <app-basic-report [basicReport]="testMethodReport.configuration"></app-basic-report>
    </div>

    <app-generic-basic-report [entries]="testMethodReport.entries" [subReports]="testMethodReport.subReports">
    </app-generic-basic-report>  
      
    <h3>Failures:</h3>
    <div *ngIf='testMethodReport?.failure'>
      <app-basic-report [basicReport]="testMethodReport.failure"></app-basic-report>
    </div>

    `

})
export class TestMethodReportComponent {
  @Input() testMethodReport: TestMethodReport;
}
