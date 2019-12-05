var express = require('express');
var router = express.Router();
const request = require('request');

// const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
const apiKey = 'sam';
// const apiBaseUrl = 'http://api.themoviedb.org/3';
const apiBaseUrl = 'http://localhost:3000';
// const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const nowPlayingUrl = `${apiBaseUrl}?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w200';
const apiBaseImdb = 'https://www.imdb.com/title/';



/* POST filtered movies. */
router.post('/search', function(req, res, next) {
    const searchInput = encodeURI(req.body.searchField);
    const filteredMoviesUrl = `${apiBaseUrl}/search?api_key=${apiKey}&query=${searchInput}`;
  
    request.get(filteredMoviesUrl, (error, response, movieData) => {
      const parsedData = JSON.parse(movieData);
      
      res.render('index', { movies: parsedData, header: 'Search results:' });
    });
});


module.exports = router;
