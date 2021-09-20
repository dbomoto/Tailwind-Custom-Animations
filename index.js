const express = require('express');
const nodemon = require('nodemon');
const path = require('path');

let app = express();

// lets the client access files on '/'
app.use('/public', express.static(process.cwd() + '/public'));

// sends the home page
app.route('/').get(function(req, res) {
	res.sendFile(path.join(process.cwd() + '/public/home/home.html'));
	return;
});

// sends the portfolio page
app.route('/portfolio').get(function(req, res) {
	res.sendFile(path.join(process.cwd() + '/public/portfolio/portfolio.html'));
	return;
});

// make the app listen
app.listen(process.env.PORT || 3000, function() {
	console.log('Listening on port ' + process.env.PORT);
});
