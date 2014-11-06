'use strict';

module.exports = function(config) {

  config.set({
    basePath : '..', //!\\ Ignored through gulp-karma //!\\

    files : [ //!\\ Ignored through gulp-karma //!\\
      'src/bower_components/angular/angular.js',
      'src/bower_components/angular/angular-route.js',
      'src/bower_components/angular-mocks/angular-mocks.js',
      'src/{app,components}/** /*.js',
      'test/unit/** /*.js'
    ],

    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],

    // Code coverage report

    reporters: ['dots', 'coverage'],

    preprocessors: {
      'src/app/**/*.js': ['coverage'],
      'src/components/**/*.js': ['coverage']
    },

    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: 'test/coverage' },
        { type: 'text', dir: 'test/coverage', file: 'coverage.txt' }
      ]
    }
  });

};
