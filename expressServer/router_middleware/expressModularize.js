var express = require('express'),
http = require('http'),
path = require('path');

var bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
static = require('serve-static'),
errorHandler = require('errorHandler');

var expressErrorHandler = require('express-error-handler');

var app = express();

app.use('/hello', function(req, res, next) {
    console.log('So, lez see how it goes');
    res.end();
});

app.get('/hey', function(req, res, next) {
    console.log('hooooy');
    res.end();
});

module.exports = app;
