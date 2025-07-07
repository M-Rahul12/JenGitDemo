package JenFBSteps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import JenFBRepo.FbSignupRepo;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class JenFBSD extends JenFBUtility.Utility{
	
	JenFBUtility.Utility utils = new JenFBUtility.Utility();
    FbSignupRepo srepo = new FbSignupRepo();

	@Given("User launches {string}")
	public void user_launches(String url) {
		utils.goToURL(url);
		utils.screenshot("UrlLaunch");
	}

	@When("User chooses create account")
	public void user_chooses_create_account() {
		utils.click(srepo.getSignup());
	}

	@When("User enters his First Name {string}")
	public void user_enters_his_First_Name(String fname) {
		utils.setText(fname, srepo.getFname());
	    utils.screenshot("FirstName");
	    String text = utils.retrieveText(srepo.getFname());
	    System.out.println(text);
	}

	@When("User enters his Surname {string}")
	public void user_enters_his_Surname(String sname) {
		utils.setText(sname, srepo.getLname()); 
	    utils.screenshot("LastName");
	}

	@When("User enters his Date of birth {string}")
	public void user_enters_his_Date_of_birth(String date) {
		utils.dropDown(date, srepo.getDate());
	}

	@When("User enters his Month of birth {string}")
	public void user_enters_his_Month_of_birth(String month) {
		utils.dropDown(month, srepo.getMonth());
	}

	@When("User enters his Year of birth {string}")
	public void user_enters_his_Year_of_birth(String year) {
		utils.dropDown(year, srepo.getYear());
		utils.screenshot("DOB");
	}

	@When("User enters his Gender {string}")
	public void user_enters_his_Gender(String gender) {
		WebElement gen = driver.findElement(By.xpath("//label[text()='"+gender+"']"));
		utils.click(gen);
		utils.screenshot("Gender");
	}

	@When("User enters his Email {string}")
	public void user_enters_his_Email(String email) {
		utils.setText(email, srepo.getEmail());
	    utils.screenshot("Email");
	}

	@When("User enters his New password {string}")
	public void user_enters_his_New_password(String password) {
		utils.setText(password, srepo.getPassword());
	    utils.screenshot("Password");
	}

	
}
