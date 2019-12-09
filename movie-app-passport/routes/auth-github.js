var express = require('express');
var router = express.Router();
const passport = require('passport');


/* GET auth with github */
// router.get('/login/github', function(req, res, next) {
//   res.json('authenticate test');
// });

router.get('/auth-github', 
  passport.authenticate('github', { failureRedirect: '/login', session: false }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('success!!!', req.user);
    
    res.redirect('/home');
});

router.get('/logout', function(req, res){
  req.logout();

  res.redirect('/');
});


module.exports = router;
