const server = require('./server/server.js')
exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: '/Users/camilafonseca/Projects/app-release.apk',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'pixel',
        platform: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  },
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './steps/*_test.js',
  name: 'codeceptjs-appium'
}