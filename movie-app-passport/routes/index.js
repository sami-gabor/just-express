var express = require('express');
var router = express.Router();

const rootRouter = require('./root');
const homeRouter = require('./home');
const movieRouter = require('./movie');
const searchRouter = require('./search');
const authGithubRouter = require('./auth-github');


const imageBaseUrl = 'http://image.tmdb.org/t/p/w200';
const apiBaseImdb = 'https://www.imdb.com/title/';


router.use('/', (req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  res.locals.apiBaseImdb = apiBaseImdb;
  
  next();
});


/* GET / */
router.use(rootRouter);

/* GET /home */
router.use(homeRouter);

/* GET /movie */
router.use(movieRouter);

/* POST /search */
router.use(searchRouter);

/* POST auth with github. */
router.use(authGithubRouter);


module.exports = router;
