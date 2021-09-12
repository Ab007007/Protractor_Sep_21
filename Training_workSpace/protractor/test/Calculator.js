let homepage =require('../page/CalculatorHomePage')
var using = require('jasmine-data-provider');

describe('Addition of two numbers using POM ', () => {
       
    beforeEach(function(){
        console.log("Executing BeforeEach");
    //    browser.waitForAngularEnabled(false);
        browser.get("https://juliemr.github.io/protractor-demo/");
    })
   

    afterEach(function(){
        browser.sleep(3000);
        console.log("Inside AfterEach");

    })

    function addData() {
        return [{fn:1,sn:2,res:3},{fn:10,sn:20,res:30},{fn:11,sn:22,res:33},{fn:11,sn:12,res:31}]
    }

     function subData() {
        return [{fn:1,sn:2,res:-1},{fn:10,sn:20,res:-10},{fn:11,sn:22,res:-11},{fn:11,sn:12,res:1}]
    }
    using(addData, function(data){
        it('Add and Validate', () => {
            homepage.enterFNum(data.fn);
            homepage.enterSNum(data.sn);
            homepage.Go();
            homepage.verifyResult(data.res)
        });
    })

    using(subData, function(data){
        it('Substract and Validate', () => {
            homepage.enterFNum(data.fn);
            homepage.substract();
            homepage.enterSNum(data.sn);
            homepage.Go();
            homepage.verifyResult(data.res)
        });
    })

});