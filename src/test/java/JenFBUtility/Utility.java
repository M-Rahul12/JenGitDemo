package JenFBUtility;

import java.io.File;
import java.io.IOException;
import java.time.Duration;
import java.util.List;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Point;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Utility {
	
	public static WebDriver driver;
	JavascriptExecutor js;
	Actions act;
	Alert alert;
	
	public void browserOpen() {
		driver = new ChromeDriver();
		WebDriverManager.chromedriver().setup();
		driver.manage().window().maximize();
		act = new Actions(driver);
		js =(JavascriptExecutor)driver;
	}
	
	public void goToURL(String site) {
		driver.get(site);
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	}
	
	public void navigateToURL(String site) {
		driver.navigate().to(site);
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(50));
	}
	
	public void click(WebElement ele) {
		ele.click();
	}
	
	public void click(int var, WebElement ele) {
		act.moveToElement(ele).build().perform();
		act.click().build().perform();
	}
	
	public void click(WebElement ele, int var) {
		js.executeScript("arguments[0].click();", ele);
	}
	
	public void rightClick(WebElement ele) {
		act.moveToElement(ele).build().perform();
		act.contextClick().build().perform();
	}
	
	public void clear(WebElement ele) {
		ele.clear();
	}
	
	public void setText(String text, WebElement ele) {
		ele.sendKeys(text);
	}
	
	public void setText(WebElement ele, String text) {
		js.executeScript("arguments[0].setAttribute(value'"+text+"';", ele);
	}
	
	public String retrieveText(WebElement ele) {
		String name = ele.getText();
		return name;
	}
	
	public void dropDown(String text, WebElement ele) {
		Select select = new Select(ele);
		select.selectByVisibleText(text);
	}
	
	public void screenshot(String filename) {
		TakesScreenshot ss = (TakesScreenshot)driver;
		File source = ss.getScreenshotAs(OutputType.FILE);
		File dest = new File(".\\target\\Screenshots\\"+filename+".png");
		try {
			FileUtils.copyFile(source, dest);
		} catch (IOException e) {
			e.printStackTrace();
		}		
	}
	
	public void scrollTo(WebElement ele) {
		act.scrollToElement(ele).build().perform();
	}
	
	public void scrollTo(WebElement ele, int var) {
		js.executeScript("arguments[0].scrollIntoView(true);", ele);
	}
	
	public void submit(WebElement ele) {
		ele.submit();
	}
	
	public String getTabId() {
		String current = driver.getWindowHandle();
		return current;
	}
	
	public void swithTab(String text) {
		Set<String> alltabs = driver.getWindowHandles();
		for(String actual: alltabs) {
			driver.switchTo().window(actual); 
			if(driver.getTitle()==text) {
			   break;	
			   }
			}
	}
	
	public void switchFrame(WebElement ele) {
		driver.switchTo().frame(ele);
	}
	
	public void dragDrop(WebElement src, WebElement dest) {
		act.dragAndDrop(src, dest).build().perform();
	}
	
	public void selectCheck(WebElement ele) {
		if(ele.isSelected()) {
			System.out.println("Element is selected");
		}
		else {
			System.out.println("Element is not selected");
		}
	}
	
	public void enableCheck(WebElement ele) {
		if(ele.isEnabled()) {
			System.out.println("Element is enabled");
		}
		else {
			System.out.println("Elements is not enabled");
		}
	}
	
	public void displayCheck(WebElement ele) {
		if(ele.isDisplayed()) {
			System.out.println("Element is displayed");
		}
		else {
			System.out.println("Elements is not displayed");
		}
		
	}
	
	public void alertAccept() {
		alert = driver.switchTo().alert();
		alert.accept();
	}
	
	public void alertDismiss() {
		alert = driver.switchTo().alert();
		alert.dismiss();
	}
	
	public String getAlertMsg() {
		alert = driver.switchTo().alert();
		String str = alert.getText();
		return str;
	}
	
	public void alertInput(String str) {
		alert = driver.switchTo().alert();
		alert.sendKeys(str);
	}
	
	public String getURL() {
		String url = driver.getCurrentUrl();
		return url;
	}
	
	public void refresh() {
		driver.navigate().refresh();
	}
	
	public void front() {
		driver.navigate().forward();
	}
	
	public void back() {
		driver.navigate().back();
	}
	
	public String pageSource() {
		String src = driver.getPageSource();
		return src;
	}
	
	public List<WebElement> findElements(String xpath) {
		List<WebElement> ele = driver.findElements(By.xpath(xpath));
		return ele;
	}
	
	public Dimension getSize(WebElement ele) {
		Dimension dim = ele.getSize();
		return dim;
	}
	
	public Point getXY(WebElement ele) {
		Point point = ele.getLocation();
		return point;
	}
	
	public String getTag(WebElement ele) {
		String tag = ele.getTagName();
		return tag;
	}
	
	public void mouseHover(WebElement ele) {
		act.moveToElement(ele).build().perform();
	}
	
	public void clickHold(WebElement ele) {
		act.moveToElement(ele).build().perform();
		act.clickAndHold().build().perform();
		
	}
	
	public void doubleClick(WebElement ele) {
		act.moveToElement(ele).build().perform();
		act.doubleClick().build().perform();
	}
	
	public void mouseRelease() {
		act.release().build().perform();
		
	}
	
	public String getCSS(WebElement ele, String str) {
		String css = ele.getCssValue(str);
		return css;
	}
	
	public void defaultContent() {
		driver.switchTo().defaultContent();
	}
	
	public void parentFrame() {
		driver.switchTo().parentFrame();
	}
	
	public void findElement(String str) {
		driver.findElement(By.xpath(str));
	}
	
	public void browserClose() {
		driver.close();
	}
	
	public void browserQuit() {
		driver.quit();
	}

}
