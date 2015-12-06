module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/scripts/app.js',
	  'src/scripts/dataProviderService.js',
	  'src/scripts/lineChartDirective.js',
	  'src/scripts/stockChartController.js',
      'test/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'/*, 'Firefox'*/],

    plugins : [
            'karma-chrome-launcher',
            /*'karma-firefox-launcher',*/
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};