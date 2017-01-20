'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var root = '/dist/';

// app.use("/", express.static(__dirname + '/dist'));
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

if (module === require.main) {
    // Start the server
    app.listen(app.get('port'), function () {
      console.log('App listening on port:', app.get('port'));
      console.log('Press Ctrl+C to quit.');
    });
}

module.exports = app;
