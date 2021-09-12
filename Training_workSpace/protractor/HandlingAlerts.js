// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
describe('My first protractor Scenario', function(){

    it('Handling Alerts in Protractor ', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://formy-project.herokuapp.com/switch-window');
        element(by.id('alert-button')).click();
        browser.switchTo().alert().getText().then(function(textOnAlert){
                console.log("Alert Contains " + textOnAlert);
                browser.sleep(3000);
        })
        browser.switchTo().alert().accept();
    });
});