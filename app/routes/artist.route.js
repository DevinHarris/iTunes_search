var express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path');

app.get('/artist', function(req, res) {
	res.sendFile(path.join(__dirname  + '/public/views/artist.html'));
});

module.exports = app;