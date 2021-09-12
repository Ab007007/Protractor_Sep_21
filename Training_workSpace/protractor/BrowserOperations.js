// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
describe('Browser Operations', function(){

   it('Basic Browser Operations Demo ', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://formy-project.herokuapp.com/switch-window').then(function(textOnAlert){
                browser.sleep(3000);
        });
        browser.driver.manage().window().maximize();
        browser.driver.navigate().to("http://www.google.com");

        browser.driver.navigate().back();
        browser.driver.navigate().forward();
        browser.driver.getCurrentUrl().then(function(url){
            console.log(`Current URL of the Application ${url}`);
        })
    }, 30000);

});