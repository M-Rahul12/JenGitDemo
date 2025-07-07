package JenFBHooks;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import JenFBUtility.Utility;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class FbHooks {
	
Utility utils = new Utility();
	
	@Before
	public void browserStart(Scenario scenario) {
		utils.browserOpen();
		byte[] sshot = ((TakesScreenshot)utils.driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(sshot, "image/png");
		
	}
	
	@After
	public void browserEnd(Scenario scenario) {
		byte[] sshot = ((TakesScreenshot)utils.driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(sshot, "image/png");
		utils.browserQuit();
	}

}
