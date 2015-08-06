var express = require('express'),
	app = express(),
	path = require('path'),
	morgan = require('morgan');

app.use(express.static('./public'));
app.set('port', 8080);
app.use(morgan('dev'));
app.use(function(req, res, next) {
	console.info('A user just connected to your app and their IP is: ', req.ip);
	next();
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(app.get('port'), function() {
	console.log('Magic happening!');
});

