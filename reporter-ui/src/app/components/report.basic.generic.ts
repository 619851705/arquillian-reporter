import { Entry } from '../report/entry';
import { BasicReport } from '../report/report';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-basic-report',
  template: `
    <div *ngIf="entries?.length > 0">
      <h4>Entries:</h4>
      <ul>
        <li *ngFor="let entry of entries">
          <app-entry [entry]="entry"></app-entry>
        </li>
      </ul>
    </div>
    <div *ngIf="subReports?.length > 0">
      <h4>Sub-reports:</h4>
      <ul>
        <li *ngFor="let subReport of subReports">
          <app-basic-report [basicReport]="subReport"></app-basic-report>
        </li>
      </ul>
    </div>
    `

})
export class GenericBasicReportComponent {
  @Input() subReports: BasicReport[];
  @Input() entries: Entry[];
}
