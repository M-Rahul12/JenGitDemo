$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/JenFB/JenFBOutline.feature");
formatter.feature({
  "name": "Facebook account creation with Outline",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "FB Account Creation with Outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches \"https://www.facebook.com\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User chooses create account",
  "keyword": "When "
});
formatter.step({
  "name": "User enters his First Name \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters his Surname \"\u003csurname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters his Date of birth \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters his Month of birth \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters his Year of birth \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters his Gender \"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters his Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters his New password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "surname",
        "date",
        "month",
        "year",
        "gender",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Monkey",
        "Luffy",
        "2",
        "Feb",
        "2000",
        "Male",
        "luffy123@gmail.com",
        "kingofpirates"
      ]
    },
    {
      "cells": [
        "Roronoa",
        "Zoro",
        "10",
        "Dec",
        "1999",
        "Male",
        "zoro234@gmail.com",
        "bestswordsman"
      ]
    },
    {
      "cells": [
        "Nico",
        "Robin",
        "20",
        "Sep",
        "1990",
        "Female",
        "nico567@gmail.com",
        "poneglyphs"
      ]
    },
    {
      "cells": [
        "Vinsmoke",
        "Sanji",
        "30",
        "Aug",
        "1998",
        "Male",
        "sanji223@gmail.com",
        "allblue"
      ]
    },
    {
      "cells": [
        "Tonytony",
        "Chopper",
        "1",
        "Jan",
        "2010",
        "Custom",
        "tony999@gmail.com",
        "bestdoc"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FB Account Creation with Outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches \"https://www.facebook.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_launches(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses create account",
  "keyword": "When "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_chooses_create_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his First Name \"Monkey\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_First_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Surname \"Luffy\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Date of birth \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Date_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Month of birth \"Feb\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Month_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Year of birth \"2000\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Year_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Gender(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Email \"luffy123@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his New password \"kingofpirates\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_New_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "FB Account Creation with Outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches \"https://www.facebook.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_launches(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses create account",
  "keyword": "When "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_chooses_create_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his First Name \"Roronoa\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_First_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Surname \"Zoro\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Date of birth \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Date_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Month of birth \"Dec\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Month_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Year of birth \"1999\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Year_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Gender(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Email \"zoro234@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his New password \"bestswordsman\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_New_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "FB Account Creation with Outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches \"https://www.facebook.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_launches(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses create account",
  "keyword": "When "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_chooses_create_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his First Name \"Nico\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_First_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Surname \"Robin\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Date of birth \"20\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Date_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Month of birth \"Sep\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Month_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Year of birth \"1990\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Year_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Gender \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Gender(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Email \"nico567@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his New password \"poneglyphs\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_New_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "FB Account Creation with Outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches \"https://www.facebook.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_launches(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses create account",
  "keyword": "When "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_chooses_create_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his First Name \"Vinsmoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_First_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Surname \"Sanji\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Date of birth \"30\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Date_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Month of birth \"Aug\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Month_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Year of birth \"1998\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Year_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Gender(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Email \"sanji223@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his New password \"allblue\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_New_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "FB Account Creation with Outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches \"https://www.facebook.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_launches(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses create account",
  "keyword": "When "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_chooses_create_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his First Name \"Tonytony\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_First_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Surname \"Chopper\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Date of birth \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Date_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Month of birth \"Jan\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Month_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Year of birth \"2010\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Year_of_birth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Gender \"Custom\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Gender(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his Email \"tony999@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_Email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters his New password \"bestdoc\"",
  "keyword": "And "
});
formatter.match({
  "location": "JenFBSteps.JenFBSD.user_enters_his_New_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
});