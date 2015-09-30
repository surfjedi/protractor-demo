// Tests for the calculator.
exports.config = {
  directConnect: false,

  specs: [
    'spec.js'
  ],

  framework: 'jasmine2',

  // capabilities: {
  //   'browserName': 'chrome',
  //   // 'chromeOptions': {
  //   //   'perfLoggingPrefs': {
  //   //     'enableNetwork': true,
  //   //     'enablePage': false,
  //   //     'enableTimeline': false
  //   //   }
  //   // },
  //   loggingPrefs: {
  //     performance: 'ALL',
  //     browser: 'ALL'
  //   }
  // },
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    
    // * Command line args to pass to ghostdriver, phantomjs's browser driver.
    // * See https://github.com/detro/ghostdriver#faq
     
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG'],
    // loggingPrefs: {
    //   performance: 'ALL',
    //   browser: 'ALL'
    // }
  },
  baseUrl: 'http://localhost:8888',
};
