module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: [ 'jasmine' ],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/**/*.js',
            'tests/**/*.js'
        ],
        reporters: [ 'progress' ],
        colors: true,
        autoWatch: false,
        browsers: [ 'PhantomJS' ],
        singleRun: true,
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ]
    });
};
