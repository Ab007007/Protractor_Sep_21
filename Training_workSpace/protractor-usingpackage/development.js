var Objects = require("./data/Object.json")
var using = require('jasmine-data-provider');
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
    function userDetailsForRegistration() {

        return [
                {fn:"User1", ln :"LN1", job:"Job1"},
                {fn:"User2", ln :"LN2", job:"Job2"},
                {fn:"User3", ln :"LN3", job:"Job3"},
                {fn:"User4", ln :"LN4", job:"Job4"},
                {fn:"User5", ln :"LN5", job:"Job5"}
            ];
        
    }
    using(userDetailsForRegistration, function (data){

        it('Handling Frames in Protractor ', () => {
            element(by.id(Objects.locators.formPage.firstNameByID)).sendKeys(data.fn);
            element(by.id(Objects.locators.formPage.lastNameByID)).sendKeys(data.ln);
            element(by.id(Objects.locators.formPage.JobTitleByID)).sendKeys(data.job);
            element(by.linkText(Objects.locators.formPage.submitByLinkText)).click();

            var expectedConditions = protractor.ExpectedConditions;
            browser.wait(expectedConditions.visibilityOf(element(by.xpath(Objects.locators.formSuccessPage.successMsgByXpath))));
            element(by.xpath(Objects.locators.formSuccessPage.successMsgByXpath)).getText().then(function(successMsg) {
            console.log("--- SUCCESS MESSAGE AFTER REGESTRING USER ---" + successMsg);
            });
                
        });

    })
 
});