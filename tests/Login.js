var utils = require ('F:/Nightwatch/pages/utils')

module.exports = {
    '@tags': ['Login'],
    before: function (browser){
        utils(browser).openBrowser()
        .assert.title('knowbly™ - Login')
    },
    
    'Enter Email and password' : function (browser){
        utils(browser).mainLogin()   
    },

    'Click on Sign in button' : function (browser){
        browser.pause(5000)
        utils(browser).loginMainButton()
        browser.pause(1000)
        .assert.title('knowbly™ - Course Composer Dashboard')
    },

    after: function (browser){
        browser.pause(5000);
        browser.end();
    }
  };