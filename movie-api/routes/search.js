var express = require('express');
var router = express.Router();

const movies = require('../data/movies');

/* GET search page. */
// /search/...
router.get('/', function(req, res, next) {
  const searchTerm = req.query.query;
  const filteredMovies = movies.filter((movie) => {
    const movieTitle = movie.title.toLowerCase();
    const movieOverview = movie.overview.toLowerCase();

    return movieTitle.includes(searchTerm) || movieOverview.includes(searchTerm);
  });

  if (!filteredMovies.length) {
    res.json({ msg: 'No match found!' });
  }
  
  res.json(filteredMovies);
});

module.exports = router;
