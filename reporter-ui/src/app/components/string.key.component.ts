import { StringKey } from '../report/string.key';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-string-key',
  template: `{{stringKey?.value}}`
})
export class StringKeyComponent {
  @Input() stringKey: StringKey;
}
