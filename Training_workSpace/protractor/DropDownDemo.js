describe('My first protractor Scenario', function(){

    function add (a , b, operator)
    {
        element(by.model('first')).sendKeys(a);
        element(by.css("option[value='" + operator + "']")).click(); 
        element(by.model('second')).sendKeys(b);
        element(by.buttonText('Go!')).click().then(function(){
            browser.sleep(3000);
        });
        element(by.css("h2[class='ng-binding']")).getText().then(function (text1)
        {
            console.log("Result of " + operator + " -------------------------" + text1);
          //  expect(parseInt(text1)).toEqual(30);
        })

    }
    it('Basic Operations on the WebElement ', function(){
        browser.get('http://juliemr.github.io/protractor-demo/'); 
        browser.sleep(10000).then(function(){
            console.log("last step after 10 Sec Wait");
        });
        add(10,20, 'DIVISION')
        add(12,20, 'MULTIPLICATION')
        add(13,20, 'ADDITION')

        element.all(by.repeater('result in memory')).count().then(function(numberOfRows){
            console.log(`Total number of Rows in Result is ${numberOfRows}`);
        });

     
    });
});