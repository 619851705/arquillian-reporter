import { StringKey } from './string.key';

export class Entry {
}

export class KeyValueEntry {
  key: StringKey;
  value: Entry;
}

export class StringEntry {
  content: StringKey;
}

export class FileEntry {
  filePath: string;
}
