import { KeyValueEntry, Entry, StringEntry, FileEntry } from '../report/entry';
import { BasicReport } from '../report/report';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entry',
  template:`
    <div style="display:inline" *ngIf='entry?.content'>
      <app-string-entry [stringEntry]="entry"></app-string-entry>
    </div>
  
    <div style="display:inline" *ngIf='entry?.key'> 
      <app-key-value-entry [keyValueEntry]="entry"></app-key-value-entry>
    </div>

    <div style="display:inline" *ngIf='entry?.filePath'>
      <app-file-entry [fileEntry]="entry"></app-file-entry>
    </div>
`
})
export class EntryComponent {
  @Input() entry: Entry;
}

@Component({
  selector: 'app-key-value-entry',
  template: `
 
      <app-string-key [stringKey]="keyValueEntry.key"></app-string-key>
 =
     <app-entry [entry]="keyValueEntry.value"></app-entry>
    `
})
export class KeyValueEntryComponent {
  @Input() keyValueEntry: KeyValueEntry;
}

@Component({
  selector: 'app-string-entry',
  template: `
          <app-string-key [stringKey]="stringEntry.content"></app-string-key>
    `
})
export class StringEntryComponent {
  @Input() stringEntry: StringEntry;
}

@Component({
  selector: 'app-file-entry',
  template: `
          file path = fileEntry.filePath
    `
})
export class FileEntryComponent {
  @Input() fileEntry: FileEntry;
}