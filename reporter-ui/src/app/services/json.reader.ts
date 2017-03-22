import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const jsonPath = 'report.json';

@Injectable()
export class JsonReader {
  
  data;
  
  constructor(private http: Http) {
    console.log('Reading a file');
  }

  readFile() {
    return this.http.get(jsonPath);
  }
  
  getJson(){
    this.readFile();
    console.log('this is the report: ' + this.data);
  }
  
}
