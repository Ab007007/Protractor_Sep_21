// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
describe('My first protractor Scenario', function(){

   
    it('Handling Frames in Protractor ', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://jqueryui.com/droppable/');
        browser.switchTo().frame(element(by.xpath("//iframe[contains(@src,'default')]")).getWebElement());
        browser.actions().dragAndDrop(element(by.id('draggable')),element(by.id('droppable'))).perform();
        element(by.id('droppable')).getText().then(function(text){
            browser.sleep(3000);
            console.log("After drag and Drop " + text);
        })
        
        
    });
    it('Handling Frames in Protractor ', () => {

        browser.waitForAngularEnabled(false);
        browser.get('https://jqueryui.com/droppable/');
        browser.switchTo().frame(element(by.xpath("//iframe[contains(@src,'default')]")).getWebElement());
        browser.actions().dragAndDrop(element(by.id('draggable')),element(by.id('droppable'))).perform();
        element(by.id('droppable')).getText().then(function(text){
            browser.sleep(3000);
            console.log("After drag and Drop " + text);
        })
        
        browser.switchTo().defaultContent();
        element(by.linkText('Draggable')).click().then(function(){
             browser.sleep(30000);
        });
        
    });

});