var express = require('express'),
	app = express(),
	artistRouter = express.Router(),
	path = require('path');


/* artistRouter.route('/artist')
	.get(function(req, res) {
		res.sendFile(path.join(__dirname + '/public/views/artist.html'));
	}); */

app.get('/artist', function(req, res) {
	res.sendFile(path.join(__dirname  + '/views/artist.html'));
}); 

module.exports = app;