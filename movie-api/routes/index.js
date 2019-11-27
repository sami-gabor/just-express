var express = require('express');
var router = express.Router();

const movies = require('../data/movies.js');
const api_keys = require('../data/apiKeys.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(movies);
});


router.get('/most_popular', function(req, res, next) {
  
  if (api_keys.includes(req.query.api_key)) {
    const popularMovies = movies.filter((movie) => {
      return movie.vote_average >= 8.4;
    });

    res.json(popularMovies);
  } else {
    res.send('Must provide an API key!');
  }
});


module.exports = router;
