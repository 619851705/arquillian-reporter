package org.arquillian.reporter.parser;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.arquillian.reporter.api.model.StringKey;
import org.arquillian.reporter.api.model.report.Report;
import org.arquillian.reporter.impl.ExecutionReport;

import java.io.FileNotFoundException;
import java.io.FileReader;

/**
 * @author <a href="mailto:mjobanek@redhat.com">Matous Jobanek</a>
 */
public class ReportJsonParser {

    public static ExecutionReport parse(String pathToJSONFile) throws FileNotFoundException {
        Gson gson = new GsonBuilder()
            .registerTypeAdapter(StringKey.class, new StringKeyJsonDeserializer())
            .registerTypeAdapter(Report.class, new ReportJsonDeserializer())
            .create();

        ExecutionReport executionReport = gson.fromJson(new FileReader(pathToJSONFile), ExecutionReport.class);
        System.out.println(executionReport.getTestSuiteReports());
        return executionReport;
    }
}
