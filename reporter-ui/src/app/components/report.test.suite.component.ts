import { TestSuiteReport } from '../report/report';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-suite-report',
  template: `<h1>Test suite report: <app-string-key [stringKey]="testSuiteReport.name"></app-string-key></h1>
    <p>start: {{testSuiteReport.start}}</p>
    <p>stop: {{testSuiteReport.stop}}</p>

    <h3>Configuration:</h3>
    <ul>
      <li *ngFor="let configReport of testSuiteReport.configuration.subReports">
        <app-basic-report [basicReport]="configReport"></app-basic-report>
      </li>
    </ul>


    <app-generic-basic-report [entries]="testSuiteReport.entries" [subReports]="testSuiteReport.subReports">
    </app-generic-basic-report>  

    <h2>Test Classes:</h2>
    <ul>
      <li *ngFor="let testClassReport of testSuiteReport.testClassReports">
        <app-test-class-report [testClassReport]="testClassReport"></app-test-class-report>
      </li>
    </ul>
    `

})
export class TestSuiteReportComponent {
  @Input() testSuiteReport: TestSuiteReport;
}
