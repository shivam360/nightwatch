module.exports =  function (browser){
    this.openBrowser = function(){
        browser
            .windowMaximize()
            .url('http://qatest.stage.knowblyapp.com')
            .waitForElementVisible('body', 10000);
            return(browser);
    };
    this.mainLogin = function(){
        browser
        .setValue('input[type=text]', 'shivams@360logica.com')
        .setValue('input[type=password]', 'Test$123')
        .waitForElementVisible('body', 5000);
    };

    this.loginMainButton = function(){
        browser
        .click('body > div:nth-child(2) > div.view > div > div > div:nth-child(2) > button > div')
        .pause(10000)
        .waitForElementVisible('body', 5000);
    };

    return this;
};