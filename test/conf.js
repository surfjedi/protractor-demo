// Tests for the calculator.
exports.config = {
  directConnect: false,

  framework: 'jasmine2',

  specs: [
    'spec.js',
    '../howtos/**/spec.js'
  ],
  suites:{
    howtos:'../howtos/**/spec.js',
    simple: 'spec.js'
  },
  multiCapabilities: [{
    'browserName': 'phantomjs',
    shardTestFiles: true,
    maxInstances: 10,

    /* 
     * Can be used to specify the phantomjs binary path.
     * This can generally be ommitted if you installed phantomjs globally.
     */
    'phantomjs.binary.path': require('phantomjs').path,

    /*     
     * Command line args to pass to ghostdriver, phantomjs's browser driver.
     * See https://github.com/detro/ghostdriver#faq
    */
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  }, {
    browserName: 'chrome',
      logName: 'Desktop size',
      shardTestFiles: true,
      maxInstances: 10,
      'chromeOptions': {
         args: ['--lang=en',
           '--window-size=1500,1200']
       }
    },{
      browserName: 'chrome',
      logName: 'Mobile size',
      shardTestFiles: true,
      maxInstances: 10,
      'chromeOptions': {
         args: ['--lang=en',
           '--window-size=414,696']
    }
  }],
  jasmineNodeOpts: {
      // If true, display spec names.
      isVerbose: false,
      // If true, print colors to the terminal.
      showColors: true,
      // If true, include stack traces in failures.
      includeStackTrace: true,
      // Default time to wait in ms before a test fails.
      defaultTimeoutInterval: 60000
    },
};
