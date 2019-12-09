var express = require('express');
var router = express.Router();
const request = require('request');


const apiKey = '1234';
const apiBaseUrl = 'http://localhost:3000';
const nowPlayingUrl = `${apiBaseUrl}?api_key=${apiKey}`;


/* GET / */
router.get('/', function(req, res, next) {
  res.render('login');
});


module.exports = router;
