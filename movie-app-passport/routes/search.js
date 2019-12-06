var express = require('express');
var router = express.Router();
const request = require('request');


const apiKey = 'sam';
const apiBaseUrl = 'http://localhost:3000';


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
