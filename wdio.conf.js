exports.config = {

    runner: 'local',

    specs: [
        './test/ui/**/*.js'
    ],

    exclude: [
        // './test/ui/brokenImages.js',
        // './test/ui/tables.js',
        // './test/ui/dropDownList.js',
        // './test/ui/dragAndDrop.js',
        // './test/ui/checkBoxes.js',
        // './test/ui/basicAuth.js',
        // './test/ui/statusCode.js',
        // './test/ui/redirection.js'
    ],

    maxInstances: 1,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--window-size=375,812']
        }

    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: 'https://the-internet.herokuapp.com/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['devtools'],
    

    framework: 'mocha',

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
    }]],

    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },
}
