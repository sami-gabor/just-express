var express = require('express');
var router = express.Router();

const movieDetails = require('../data/movieDetails.js');

/* GET movie page. */
// /movie/...
router.get('/:movieId', function(req, res, next) {
  const movieId = req.params.movieId;
  const singleMovieDetails = movieDetails.find((movie) => {
    return movie.id == movieId;
  });

  if (singleMovieDetails) {
    res.json(singleMovieDetails);
  } else {
    res.json({ msg: 'Movie details are missing!' });
  }
});

module.exports = router;
