import { TestClassReport } from '../report/report';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-class-report',
  template: `<h1><app-string-key [stringKey]="testClassReport.name"></app-string-key></h1>
    <p>start: {{testClassReport.start}}</p>
    <p>stop: {{testClassReport.stop}}</p>

    <h3>Configuration:</h3>
    <ul>
      <li *ngFor="let configReport of testClassReport.configuration.subReports">
        <app-basic-report [basicReport]="configReport"></app-basic-report>
      </li>
    </ul>
  
    <app-generic-basic-report [entries]="testClassReport.entries" [subReports]="testClassReport.subReports">
    </app-generic-basic-report>  
  
    <h2>Test Methods:</h2>
    <ul>
      <li *ngFor="let testMethodReport of testClassReport.testMethodReports">
        <app-test-method-report [testMethodReport]="testMethodReport"></app-test-method-report>
      </li>
    </ul>
    `

})
export class TestClassReportComponent {
  @Input() testClassReport: TestClassReport;
}
