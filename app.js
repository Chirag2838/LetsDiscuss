require('./server/data/db');
require('./server/data/model');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./server/routes');

app.set('port', 3000);

app.use(function(req, res, next){

	console.log(req.method + " " + req.url);
	next();
})

app.use(express.static(path.join(__dirname, '/dist')));

app.use(bodyParser.urlencoded({extended : false}));

app.use('/api', routes);

app.get('*', function(req, res) {
  res.sendfile(path.join(__dirname, '/dist/index.html'))
})

var server = app.listen(app.get('port'), function(){

	var port = server.address().port;
	console.log('server started at port no ' + port);
});
