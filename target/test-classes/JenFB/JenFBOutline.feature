Feature: Facebook account creation with Outline

Scenario Outline: FB Account Creation with Outline

Given User launches "https://www.facebook.com"
When User chooses create account
And User enters his First Name "<firstname>"
And User enters his Surname "<surname>"
And User enters his Date of birth "<date>"
And User enters his Month of birth "<month>"
And User enters his Year of birth "<year>"
And User enters his Gender "<gender>"
And User enters his Email "<email>"
And User enters his New password "<password>"

Examples:
|firstname |surname |date |month |year |gender |email             |password     |
|Monkey    |Luffy   |2    |Feb   |2000 |Male   |luffy123@gmail.com|kingofpirates|
|Roronoa   |Zoro    |10   |Dec   |1999 |Male   |zoro234@gmail.com |bestswordsman|
|Nico      |Robin   |20   |Sep   |1990 |Female |nico567@gmail.com |poneglyphs   |
|Vinsmoke  |Sanji   |30   |Aug   |1998 |Male   |sanji223@gmail.com|allblue      |
|Tonytony  |Chopper |1    |Jan   |2010 |Custom |tony999@gmail.com |bestdoc      |