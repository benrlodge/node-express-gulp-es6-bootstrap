var express = require('express');
var app = express();

var people = require('./app/scripts/people')

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Node, Express, Gulp, Babel.', people: people});
});


var server = app.listen(3535, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Kickin ass and taken names since 1984 at http://%s:%s', host, port);
});