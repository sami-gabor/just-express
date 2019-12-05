var express = require('express');
var router = express.Router();
const request = require('request');

const movieRouter = require('./movie');
const searchRouter = require('./search');

// const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
const apiKey = 'sam';
// const apiBaseUrl = 'http://api.themoviedb.org/3';
const apiBaseUrl = 'http://localhost:3000';
// const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const nowPlayingUrl = `${apiBaseUrl}?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w200';
const apiBaseImdb = 'https://www.imdb.com/title/';


router.use('/', (req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  res.locals.apiBaseImdb = apiBaseImdb;
  next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);
    // res.render('index', { movies: parsedData.results, header: 'Now Playing' });
    res.render('index', { movies: parsedData, header: 'Now Playing' });
  });
});


/* GET movie details page. */
router.use(movieRouter);

/* POST filtered movies. */
router.use(searchRouter);

module.exports = router;
