var Objects = require("./data/Object.json")
describe('Handling Frames Scenario', function(){

    beforeEach(function(){
        console.log("Executing BeforeEach");
        browser.waitForAngularEnabled(false);
        browser.get(Objects.url);
    })
   

    afterEach(function(){
        browser.sleep(3000);
        console.log("Inside AfterEach");

    })
    it('Handling Frames in Protractor ', () => {
        element(by.id(Objects.locators.formPage.firstNameByID)).sendKeys(Objects.formUserDetails.firstName);
        element(by.id(Objects.locators.formPage.lastNameByID)).sendKeys(Objects.formUserDetails.lastName);
        element(by.id(Objects.locators.formPage.JobTitleByID)).sendKeys(Objects.formUserDetails.JobTitle);
        element(by.linkText(Objects.locators.formPage.submitByLinkText)).click();

        var expectedConditions = protractor.ExpectedConditions;
        browser.wait(expectedConditions.visibilityOf(element(by.xpath(Objects.locators.formSuccessPage.successMsgByXpath))));
      
       element(by.xpath(Objects.locators.formSuccessPage.successMsgByXpath)).getText().then(function(successMsg) {
           console.log("--- SUCCESS MESSAGE AFTER REGESTRING USER ---" + successMsg);
       });
               
    });
});