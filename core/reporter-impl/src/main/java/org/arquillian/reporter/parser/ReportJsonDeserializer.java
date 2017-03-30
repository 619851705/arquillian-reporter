package org.arquillian.reporter.parser;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import org.arquillian.reporter.api.model.report.Report;
import org.arquillian.reporter.impl.ExecutionReport;

import java.lang.reflect.Type;

/**
 * @author <a href="mailto:mjobanek@redhat.com">Matous Jobanek</a>
 */
public class ReportJsonDeserializer implements JsonDeserializer<Report> {

    @Override
    public Report deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context)
        throws JsonParseException {

        JsonObject jsonReport = (JsonObject) json;
        if (jsonReport.get("getTestSuiteReports") != null){
            ExecutionReport executionReport = new ExecutionReport();

        }

        return null;
    }
}
