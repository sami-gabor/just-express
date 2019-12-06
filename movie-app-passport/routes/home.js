var express = require('express');
var router = express.Router();
const request = require('request');


const apiKey = '1234';
const apiBaseUrl = 'http://localhost:3000';
const nowPlayingUrl = `${apiBaseUrl}?api_key=${apiKey}`;


/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);
    res.render('index', { movies: parsedData, header: 'Now Playing' });
  });
});


module.exports = router;
