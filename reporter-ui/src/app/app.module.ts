import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KeyValueEntryComponent, StringEntryComponent, EntryComponent, FileEntryComponent } from './components/entry.component';
import { BasicReportComponent } from './components/report.basic.component';
import { GenericBasicReportComponent } from './components/report.basic.generic';
import { ReportComponent } from './components/report.component';
import { TestClassReportComponent } from './components/report.test.class.component';
import { TestMethodReportComponent } from './components/report.test.method.component';
import { TestSuiteReportComponent } from './components/report.test.suite.component';
import { StringKeyComponent } from './components/string.key.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    TestSuiteReportComponent,
    TestClassReportComponent,
    TestMethodReportComponent,
    BasicReportComponent,
    KeyValueEntryComponent,
    StringKeyComponent,
    StringEntryComponent,
    EntryComponent,
    GenericBasicReportComponent,
    FileEntryComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
