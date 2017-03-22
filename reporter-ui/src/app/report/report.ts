import { Entry } from './entry';
import { StringKey } from './string.key';

export class BasicReport {
  name: StringKey;
  entries: Entry[];
  subReports: BasicReport[];

}

export class TestSuiteReport extends BasicReport {
  testClassReports: TestClassReport[];
  configuration: ConfigurationReport;
  start: string;
  stop: string;
}

export class TestClassReport extends BasicReport{
  testMethodReports: TestMethodReport[];
  configuration: ConfigurationReport;
  start: string;
  stop: string;
}

export class TestMethodReport extends BasicReport { 
  configuration: ConfigurationReport;
  failure: FailureReport;
  start: string;
  stop: string;
}

export class ConfigurationReport extends BasicReport {

}

export class FailureReport extends BasicReport {

}

