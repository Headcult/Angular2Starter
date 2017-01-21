'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8000));

// var root = '/dist/';

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// app.use("/", express.static(__dirname + '/dist'));
// app.use(express.static('dist'));

// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// app.get('/', function (req, res) {
//   res.sendFile('index.html');
// });

if (module === require.main) {
    // Start the server
    app.listen(app.get('port'), function () {
      console.log('App listening on port:', app.get('port'));
      console.log('Press Ctrl+C to quit.');
    });
}

module.exports = app;
