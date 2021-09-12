// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
describe('My first protractor Scenario', function(){

   
    it('Handling Multi Browsers in Protractor  ', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.irctc.co.in/eticketing/errors.html#');
        element(by.linkText('Contact Us')).click();

        browser.getAllWindowHandles().then(function(WindowIDS){

            console.log(WindowIDS[0] + " : " + WindowIDS[1]);
            browser.switchTo().window(WindowIDS[1]);
            element.all(by.tagName('a')).each(function(link){
                link.getText().then(function(emailID){
                    console.log(emailID);
                })
            });
            
            browser.switchTo().window(WindowIDS[0]);
            element.all(by.tagName('a')).each(function(link){
                link.getText().then(function(emailID){
                    console.log(emailID);
                })
            });
        })
    },30000);

});