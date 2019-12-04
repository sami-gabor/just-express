var express = require('express');
var router = express.Router();

const movieDetails = require('../data/movieDetails.js');


/* GET movie page. */
/* /movie/movieId */
router.get('/:movieId', function(req, res, next) {
  const movieId = req.params.movieId;
  const singleMovieDetails = movieDetails.find((movie) => {
    return movie.id == movieId;
  });

  if (singleMovieDetails) {
    res.json(singleMovieDetails);
  } else {
    res.json({ msg: 'Invalid movie id' });
  }
});

/* POST movie page. */
/* /movie/movieId/rating */
router.post('/:movieId/rating', function(req, res) {
  const rating = req.body.value;
  
  if (rating > 0.5 && rating <= 10) {
    res.json({ msg: `Thank you for submitting your rating of ${rating}`});
  } else {
    res.json({ msg: 'Rating must be in the range 0.5 - 10!'});
  }
})

module.exports = router;
