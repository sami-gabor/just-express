var express = require('express');
var router = express.Router();

const movies = require('../data/movies.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(movies);
});


router.get('/most_popular', function(req, res, next) {
  const popularMovies = movies.filter((movie) => {
    return movie.vote_average >= 8.4;
  });
  res.json(popularMovies);
});


module.exports = router;
