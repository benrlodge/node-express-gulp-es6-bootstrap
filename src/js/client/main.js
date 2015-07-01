require.config({
  baseUrl: 'js/app',
  paths: {
    jquery: '../vendor/jquery',
    backbone: '../vendor/backbone',
    underscore: '../vendor/underscore'
  }
});

require(['app'], function(app){
  console.log('require.js good 2 go')
  var app = new app();
});