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

        element.all(by.repeater('result in memory').column('result.timestamp')).getText().then(function(columns){
            console.log('----------------------Printing all column values-----------------');
            for (const col of columns) {
                    console.log(col);
            }
        });

        element.all(by.repeater('result in memory').row(0).column('result.timestamp')).getText().then(function(timestamp){
                console.log(`Chain locator in Repeater - to print first cell value ${timestamp}`);
        });

    });
});