describe('My first protractor Scenario', function(){
    it('My First Test',function() {
        browser.get('http://juliemr.github.io/protractor-demo/'); 
        browser.sleep(10000).then(function(){
            console.log("last step after 10 Sec Wait");
        });
    });


    it('Basic Operations on the WebElement ', function(){
        element(by.model('first')).sendKeys(10);
        element(by.model('second')).sendKeys(20);

        element(by.id('gobutton')).click();
        element(by.css("h2[class='ng-binding']")).getText().then(function (text1)
        {
            console.log("-------------------------" + text1);
           
        })
    });

    
    it('Basic Operations on the WebElement ', function(){
        element(by.model('first')).sendKeys(22);
        element(by.model('second')).sendKeys(22);

        element(by.id('gobutton')).click();
        element(by.binding('latest')).getText().then(function (text)
        {
            console.log("-------------------------" + text);
            
        })
    });
});