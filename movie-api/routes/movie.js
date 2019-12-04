var express = require('express');
var router = express.Router();

const movieDetails = require('../data/movieDetails.js');


const requireJSON = (req, res, next) => {
  if (req.is('application/json')) {
    next();
  } else {
    res.json({ msg: 'Content-Type must be applicatjion/json! '});
  }
}


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
router.post('/:movieId/rating', requireJSON, function(req, res) {
  const rating = req.body.value;
  
  if (rating > 0.5 && rating <= 10) {
    // do some DB work...
    res.json({ msg: `Thank you for submitting your rating of ${rating}`});
  } else {
    res.json({ msg: 'Rating must be in the range 0.5 - 10!'});
  }
})


/* DELETE movie page. */
/* /movie/movieId/rating */
router.delete('/:movieId/rating', requireJSON, function(req, res) {
  // do some DB work...
  res.json({ msg: 'Your rating was deleted!' });
});

module.exports = router;
