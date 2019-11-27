var express = require('express');
var router = express.Router();

/* GET movie page. */
// /movie/...
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movie Page' });
});

module.exports = router;
