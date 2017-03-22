import { TestSuiteReport } from '../report/report';
import { JsonReader } from '../services/json.reader';
import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-whole-report',
  template: `
  <div *ngFor="let testSuiteReport of testSuiteReports">
    <app-test-suite-report [testSuiteReport]="testSuiteReport"></app-test-suite-report>
  </div>
`,
  providers: [JsonReader]
})
export class ReportComponent {
  testSuiteReports: TestSuiteReport[];

  constructor(private jsonReader: JsonReader) {
    jsonReader.readFile().subscribe(content => {
      this.testSuiteReports = content.json();
    }
    );
  }

}
