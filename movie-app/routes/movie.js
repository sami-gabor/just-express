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



/* GET movie details page. */
router.get('/movie/:id', function(req, res, next) {
    const movieId = req.params.id;
    // const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`;
  
    request.get(thisMovieUrl, (error, response, movieData) => {
      const parsedData = JSON.parse(movieData);
      res.render('single-movie', { movie: parsedData });
    });
  });



module.exports = router;
