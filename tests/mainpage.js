require("chai").should();
require('chromedriver');
var assert = require("assert");
var webdriver = require("selenium-webdriver"),
  By = webdriver.By;
  until = webdriver.until;

var driver = new webdriver.Builder().forBrowser("chrome").build();

describe("Main Page", function() {
  it("should show team.sg.com", function(done) {
    driver.get("https://team-staging.sweetgreen.com/")
    .then(done);        
  });


describe('Verify Main Page Letters', function() {
          it("Page contains the texts", async function(){
             var expect = require('chai').expect
              var text = await driver.getPageSource()
              expect(text).contains("Sign in to get all the tools")
              expect(text).contains("Enter email address")
              expect(text).contains("Click here")               
              expect(text).contains("to reset your password.")
              expect(text).contains("Need help?")
              expect(text).contains("Contact Support")            

           });

        });

describe('Check if Next button enabled', function(){
  it('The button is disabled', async function(){
     var expect = require('chai').expect
     var text = await driver.getPageSource()
     expect(text).contains('aria-disabled="true"')
     
  })

})


  describe("ButtonLogo", function() {
    it("Clicking on logo should navigate to main page", async function() {
      driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div/div[1]/a")).click();
      var Url = await driver.getCurrentUrl();
      assert.equal(Url, "https://team-staging.sweetgreen.com/login");
    });
  });
     


  after(function quitWebdriver(done) {
    driver.quit().
    then(done);
  });
});
