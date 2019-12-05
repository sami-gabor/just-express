var express = require('express');
var router = express.Router();
const request = require('request');

const apiKey = '1234';
const apiBaseUrl = 'http://localhost:3000';


/* GET movie details page. */
router.get('/movie/:id', function(req, res, next) {
	const movieId = req.params.id;
	const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`;

	request.get(thisMovieUrl, (error, response, movieData) => {
		const parsedData = JSON.parse(movieData);
		res.render('single-movie', { movie: parsedData });
	});
});


module.exports = router;
