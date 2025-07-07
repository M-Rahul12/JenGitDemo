package JenFBRepo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import JenFBUtility.Utility;

public class FbSignupRepo extends Utility{
	
	public FbSignupRepo() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//a[text()='Create new account']")
	private WebElement signup;
	
	@FindBy(xpath = "//input[@name='firstname']")
	private WebElement fname;
	
	@FindBy(xpath = "//input[@name='lastname']")
	private WebElement lname;
	
	@FindBy(xpath = "//select[@id='day']")
	private WebElement date;
	
	@FindBy(xpath = "//select[@id='month']")
	private WebElement month;
	
	@FindBy(xpath = "//select[@id='year']")
	private WebElement year;
	
	@FindBy(xpath = "//div[text()='Mobile number or email address']//following-sibling::input")
	private WebElement email;
	
	@FindBy(xpath = "//input[@type='password']")
	private WebElement password;

	public WebElement getSignup() {
		return signup;
	}

	public WebElement getFname() {
		return fname;
	}

	public WebElement getLname() {
		return lname;
	}

	public WebElement getDate() {
		return date;
	}

	public WebElement getMonth() {
		return month;
	}

	public WebElement getYear() {
		return year;
	}

	public WebElement getEmail() {
		return email;
	}

	public WebElement getPassword() {
		return password;
	}

}
