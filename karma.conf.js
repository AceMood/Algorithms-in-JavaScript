// Karma configuration
// Generated on Wed Dec 03 2014 21:59:03 GMT+0800 (中国标准时间)


module.exports = function(config) {

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // html file as fixture
            /*{
                pattern: 'test-all.html',
                watched: false,
                included: false,
                served: true
            },*/
            // dependencies
            /*
            {
                pattern: 'lib/jasmine-2.0.3/jasmine.js',
                watched: false,
                included: true,
                served: true
                },
            {
                pattern: 'lib/jasmine-2.0.3/jasmine-html.js',
                watched: false,
                included: true,
                served: true
            },
            {
                pattern: 'lib/jasmine-2.0.3/boot.js',
                watched: false,
                included: true,
                served: true
            },*/
            // test files
            {
                pattern: '!(node_modules)/*.js',
                watched: false,
                included: true,
                served: true
            },
            // entry point file
            {
                pattern: 'test/jasmine-global.js',
                watched: false,
                included: true,
                served: true
            }
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // we need this to keep Karma from converting our fixtures to JavaScript
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // number ms delay to wait for other changes
        autoWatchBatchDelay: 5000,


        // time for connecting
        browserDisconnectTolerance: 5000,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS', 'IE', 'Opera'],
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Firefox'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
