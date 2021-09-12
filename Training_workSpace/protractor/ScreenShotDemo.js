describe('My first protractor Scenario', function(){

    function operation (a , b, operator)
    {
        element(by.model('first')).sendKeys(a);
        //element(by.css("option[value='" + operator + "']")).click(); 
        element(by.model('operator')).all(by.tagName('option')).each(function(option){
            option.getText().then(function(operatorFromApp){
                if(operator === operatorFromApp)
                {
                    option.click();
                }
            })
        })
        element(by.model('second')).sendKeys(b);
        element(by.buttonText('Go!')).click().then(function(){
            browser.sleep(3000);
        });
    }
    it('Basic Addition  ', function(){
        browser.get('http://juliemr.github.io/protractor-demo/'); 
        browser.sleep(10000).then(function(){
            console.log("last step after 10 Sec Wait");
        });
        operation(10,20, '+')
          element(by.css("h2[class='ng-binding']")).getText().then(function (text1)
        {
            console.log("Result of -------------------------" + text1);
            expect(parseInt(text1)).toEqual(30);
        })

    });

    it('Basic Substraction ', function(){
        browser.get('http://juliemr.github.io/protractor-demo/'); 
        browser.sleep(10000).then(function(){
            console.log("last step after 10 Sec Wait");
        });
        operation(10,20, '-')
        element(by.css("h2[class='ng-binding']")).getText().then(function (text1)
        {
            console.log("Result of  -------------------------" + text1);
            expect(parseInt(text1)).toEqual(10);
        })

    });
});