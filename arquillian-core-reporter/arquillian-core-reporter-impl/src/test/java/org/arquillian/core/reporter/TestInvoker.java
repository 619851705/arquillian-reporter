package org.arquillian.core.reporter;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.apache.commons.io.FileUtils;
import org.arquillian.reporter.impl.ExecutionReport;
import org.arquillian.reporter.parser.ReportJsonParser;
import org.junit.Test;
import org.junit.runner.JUnitCore;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;

/**
 * @author <a href="mailto:mjobanek@redhat.com">Matous Jobanek</a>
 */
public class TestInvoker {

    @Test
    public void runTest() throws FileNotFoundException {

        JUnitCore.runClasses(SecondSimpleTest.class);

        ExecutionReport parse = ReportJsonParser.parse("target/report.json");

        printJson(parse);
    }

    private void printJson(ExecutionReport executionReport) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String json = gson.toJson(executionReport);
        try {
            FileUtils.writeStringToFile(new File("target/newReport.json"), json, Charset.defaultCharset());
        } catch (IOException e) {
            e.printStackTrace();
        }

        //        System.out.println(json);
        //        try {
        //            Thread.sleep(500);
        //        } catch (InterruptedException e) {
        //            e.printStackTrace();
        //        }
    }
}
