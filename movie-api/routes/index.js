var express = require('express');
var router = express.Router();

const movies = require('../data/movies.js');


const sortObjects = (objArray, filter, desc=true) => {
  const sorted = objArray.sort(function(obj1, obj2) {
    return obj1[filter] - obj2[filter];
  });

  if (desc) return sorted.reverse();

  return sorted;
}


/* GET home page. */
/* / */
router.get('/', function(req, res, next) {
  res.json(movies);
});


/* /most_popular */
router.get('/most_popular', function(req, res, next) {
  const topRatedMovies = sortObjects(movies, 'popularity');
  
  res.json(topRatedMovies);
});

/* /most_reviewed */
router.get('/most_reviewed', function(req, res, next) {
  const mostReviewedMovies = sortObjects(movies, 'vote_count');
  
  res.json(mostReviewedMovies);
});

/* /highest_rated */
router.get('/highest_rated', function(req, res, next) {
  const mostReviewedMovies = sortObjects(movies, 'vote_average');
  
  res.json(mostReviewedMovies);
});


module.exports = router;
