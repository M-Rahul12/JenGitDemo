package JenFBRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(features = ".\\src\\test\\resources\\JenFB",
                 glue = {"JenFBSteps", "JenFBHooks"},
                 monochrome = true,
                 dryRun = false,
                 plugin = {"html:target/html","json:target/json/jreport.json"}
                 )

public class FbRunnerTest {
	


}
