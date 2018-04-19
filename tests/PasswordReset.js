
require('chai').should();

var assert = require('assert');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
    until = webdriver.until;

var driver = new webdriver.Builder()
	   .forBrowser('chrome')
	   .build();



describe('Password Reset', function(){

	
		it('It should navigate to reset page', function (done){
		driver.get('https://team-staging.sweetgreen.com/')
		driver.findElement(webdriver.By.xpath("//*[contains(text(), 'Click here')]")).click()
		.then(done);


    }); 


		describe('ButtonLogo', function(){

		it('Clicking on logo should navigate to main page', async function(){
				driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div/div[1]/a")).click()								
				var Url = await driver.getCurrentUrl();
				assert.equal(Url, "https://team-staging.sweetgreen.com/login");
	    })
		
        });



after(function quitWebdriver(done){
        driver.quit()
        .then(done);
    });
});