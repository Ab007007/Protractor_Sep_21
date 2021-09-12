let homepage = function () {

    let fnum = element(by.model('first'));
    let snum = element(by.model('second'));
    let goButton = element(by.id('gobutton'));
    let subOperator  = element(by.css("option[value='SUBTRACTION']"));

    this.enterFNum = function (first) {
        fnum.sendKeys(first)
        
    }

    this.enterSNum = function (second) {
        snum.sendKeys(second)
        
    }
    this.substract = function() {
        subOperator.click();
    }
    
    this.Go = function () {
        goButton.click();
    }


    this.verifyResult = function (expectedResult) {
        let result =  element(by.css("h2[class='ng-binding']")).getText().then(function (actualResult)
        {
            console.log("-------------------------" + actualResult);
            expect(parseInt(actualResult)).toEqual(expectedResult);
        })
    }

}

module.exports = new homepage();