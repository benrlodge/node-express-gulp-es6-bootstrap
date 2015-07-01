define(['underscore', 'backbone','jquery'], function (_, Backbone, $) {

  class App{
    constructor(){
      console.log('Underscore: ', _);
      console.log('Backbone: ', Backbone);
      console.log('jQuery: ', $);
    }
  }

  return App;
 
});