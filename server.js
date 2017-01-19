'use strict';

var express = require('express');
var app = express();

var root = '/dist/';

app.use("/", express.static(__dirname + '/dist'));
app.use(express.static(root));

app.get('/', function (req, res) {
  res.sendFile('index.html')
});

app.set('port', (process.env.PORT || 8080));

if (module === require.main) {
  // Start the server
  var server = app.listen(process.env.port || 8080, function () {
    var port = server.address().port;

    console.log('App listening on port %s', port);
    console.log('Press Ctrl+C to quit.');
  });
}

module.exports = app;
