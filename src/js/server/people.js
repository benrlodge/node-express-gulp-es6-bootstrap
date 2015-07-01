let Person = require('./Person');

let Node = new Person('Node.js', 'http://www.pingzine.com/wp-content/uploads/2012/07/nodejs.jpeg');
let Express = new Person('Express.js','https://cldup.com/wpGXm1cWwB.png');
let Gulp = new Person('Gulp','http://s3-us-west-2.amazonaws.com/i.cdpn.io/75971.jmzDf.90c44df7-1c42-4f1e-afcf-54debeba00fd.png');
let ES6 = new Person('ES6','https://angularclass.com/images/es6.png');
let Bootstrap = new Person('Bootstrap','http://www.w3schools.com/bootstrap/bs.png');
let RequireJS = new Person('Require.js','http://verekia.com/wp-content/uploads/2011/11/require-js.png');

module.exports = [ES6, Bootstrap, Node, RequireJS, Gulp, Express];