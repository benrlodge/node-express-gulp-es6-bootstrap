'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

define(['underscore', 'backbone', 'jquery'], function (_, Backbone, $) {
  var App = function App() {
    _classCallCheck(this, App);

    console.log('Underscore: ', _);
    console.log('Backbone: ', Backbone);
    console.log('jQuery: ', $);
  };

  return App;
});