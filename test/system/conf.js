exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js', 'todo-spec-failing.js'],

  onPrepare: function() {
    var jasmineAllureReporter = require('jasmine-allure-reporter').singleton;
    jasmineAllureReporter.configure({
      allureReport: {
        resultsDir: 'allure-results'
      }
    });
    jasmine.getEnv().addReporter(jasmineAllureReporter);
  }
};
