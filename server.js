'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var root = '/dist/';

// app.use("/", express.static(__dirname + '/dist'));
app.use(express.static('dist'));

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(__dirname + '/dist/index.html');
});

if (module === require.main) {
    // Start the server
    var server = app.listen(app.get('port'), function () {
      var port = server.address().port;
      console.log('App listening on port %s', port);
      console.log('Press Ctrl+C to quit.');
  });
}

module.exports = app;
