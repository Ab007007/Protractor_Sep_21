// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
describe('My first protractor Scenario', function(){

   
    it('Non Angular Application  ', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.flipkart.com/');

        var expectedConditions = protractor.ExpectedConditions;
        browser.wait(expectedConditions.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
        element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();

        browser.actions().mouseMove(element(by.xpath("//div[text()='Fashion']"))).perform();
        
        element.all(by.xpath("//div[text()='Fashion']/parent::div/following-sibling::div//a")).each(function(element , index){
            element.getText().then(function(row){
                console.log(`Index ${index} has ${row}`);
            })
        })
        browser.actions().mouseMove(element(by.xpath("//div[text()='Electronics']"))).perform();

         element.all(by.xpath("//div[text()='Electronics']/parent::div/following-sibling::div//a")).each(function(element , index){
            element.getText().then(function(row){
                console.log(`Index ${index} has ${row}`);
            })
        })
        browser.actions().mouseMove(element(by.xpath("//div[text()='Home']"))).perform();
         element.all(by.xpath("//div[text()='Home']/parent::div/following-sibling::div//a")).each(function(element , index){
            element.getText().then(function(row){
                console.log(`Index ${index} has ${row}`);
            })
        })
        browser.actions().mouseMove(element(by.xpath("//div[text()='Appliances']"))).perform();
         element.all(by.xpath("//div[text()='Appliances']/parent::div/following-sibling::div//a")).each(function(element , index){
            element.getText().then(function(row){
                console.log(`Index ${index} has ${row}`);
            })
        })

    },30000);

    it('Actions - Drag and Drop ', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.flipkart.com/');

        var expectedConditions = protractor.ExpectedConditions;
        browser.wait(expectedConditions.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
        element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();


        browser.actions().dragAndDrop(element(by.xpath("//img[@alt='Mobiles']")), element(by.name('q'))).perform();

        element(by.xpath("//button[@type='submit']")).click();
    },60000);

});