describe('My first NonAngular Test', function(){

    it('Automate Non-Angular Application  ', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.flipkart.com/'); 

        var expectedConditions = protractor.ExpectedConditions;
        browser.wait(expectedConditions.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
        element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();
    });
});