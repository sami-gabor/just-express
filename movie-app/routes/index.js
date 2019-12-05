var express = require('express');
var router = express.Router();

const homeRouter = require('./home');
const movieRouter = require('./movie');
const searchRouter = require('./search');


const imageBaseUrl = 'http://image.tmdb.org/t/p/w200';
const apiBaseImdb = 'https://www.imdb.com/title/';


router.use('/', (req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  res.locals.apiBaseImdb = apiBaseImdb;
  next();
});


/* GET home page. */
router.use(homeRouter);

/* GET movie details page. */
router.use(movieRouter);

/* POST filtered movies. */
router.use(searchRouter);


module.exports = router;
