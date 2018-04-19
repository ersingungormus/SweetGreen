
require('chai').should();

var assert = require('assert');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
    until = webdriver.until;

var driver = new webdriver.Builder()
	   .forBrowser('chrome')
	   .build();
	


describe('Main Page', function(){

	
		it('should show team.sg.com', function (done){
		driver.get('https://team.sweetgreen.com/')
		.then(done);
    }); 

describe('ButtonLogo', function(){

		it('Clicking on logo should navigate to main page', function(done){
				driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div/div[1]/a")).click()												
				//driver.getPageSource().contains("Sign in to get all the tools")
				String Url = driver.getCurrentUrl();
				Assert.assertEquals(Url, "https://team.sweetgreen.com/login );			
	        .then(done);
	    })
		
        });


after(function quitWebdriver(done){
        driver.quit()
        .then(done);
    });

});