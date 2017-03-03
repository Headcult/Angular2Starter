// Import dependencies
const express = require('express');
const router = express.Router();
const path = require('path');

// GET api listing.
router.get('/api', function(req, res){
  res.send('API works');
});

// router.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '"/../../dist/index.html'));
// });

module.exports = router;
