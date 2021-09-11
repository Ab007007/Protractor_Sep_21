describe('My first protractor Scenario', function(){

    function add (a , b)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click().then(function(){
            browser.sleep(3000);
        });
        element(by.css("h2[class='ng-binding']")).getText().then(function (text1)
        {
            console.log("-------------------------" + text1);
          //  expect(parseInt(text1)).toEqual(30);
        })

    }
    it('Basic Operations on the WebElement ', function(){
        browser.get('http://juliemr.github.io/protractor-demo/'); 
        browser.sleep(10000).then(function(){
            console.log("last step after 10 Sec Wait");
        });
        add(10,20)
        add(12,20)
        add(13,20)

        element.all(by.repeater('result in memory')).count().then(function(numberOfRows){
            console.log(`Total number of Rows in Result is ${numberOfRows}`);
        });

        element.all(by.repeater('result in memory')).first().element(by.binding('result.timestamp')).getText().then(function(timestamp){
                console.log(`Time Stamp show is ${timestamp}`);
        });

        element.all(by.repeater('result in memory')).get(0).element(by.binding('result.timestamp')).getText().then(function(timestamp){
                console.log(`Time Stamp show for index 0 is ${timestamp}`);
        });
        element.all(by.repeater('result in memory')).get(1).element(by.binding('result.timestamp')).getText().then(function(timestamp){
                console.log(`Time Stamp show for index 1 is ${timestamp}`);
        });
       
    });
});