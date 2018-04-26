require("chai").should();
require('chromedriver');
var assert = require("assert");
var webdriver = require("selenium-webdriver"),
  By = webdriver.By;
  until = webdriver.until;

var driver = new webdriver.Builder().forBrowser("chrome").build();

describe("Login Process", function() {
  it("Navigating to team.sg.com", function(done) {
    driver.get("https://team-staging.sweetgreen.com/")
    .then(done);        
  });

  describe("Login",function(done){
  	it("Username",function(){
  		driver.findElement(webdriver.By.css('input[data-testid="login-form-username"]')).sendKeys("ersin.gungormus@sweetgreen.com")
  		driver.findElement(webdriver.By.css('[role="button"][data-testid="login-form-next"]')).click()

  	})

       it('Give some time', function(done){ this.timeout(2000); })

    it("Password",function(){
               
      driver.findElement(webdriver.By.css('input[data-testid="login-form-password"]')).sendKeys("Ytre5432!")
      driver.findElement(webdriver.By.css('[role="button"][data-testid="login-form-submit"]')).click()
      
    })
   
  });
 
/*after(function quitWebdriver(done){
        driver.quit()
        .then(done);
    });
*/
});

/*
describe('Login Result', function() {
          it("Successful Login", async function(){
             var expect = require('chai').expect
              var text = await driver.getPageSource()

it('Give some time', function(done){ this.timeout(2000); })

              expect(text).contains("Sweetgreen Team")
              expect(text).contains("Google Mail")      

           });
  
  });

*/


//if =>