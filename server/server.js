'use strict';

// Get dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

// Get our API routes
const api = require('./routes/api');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Create link to Angular build directory
const distDir = __dirname + "/../" + "/dist/";
app.use(express.static(distDir));

// Set our api routes
app.use('/', api);

// Get port from environment and store in Express.
const port = process.env.PORT || '8080';
app.set('port', port);

// Start the server  and listen on provided port, on all network interfaces.
app.listen(app.get('port'), function () {
  console.log('App is running on port:', app.get('port'));
  console.log('Press Ctrl+C to quit.');
});
