var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require("express-session");

var indexRouter = require('./routes/index');

var app = express();

passport.use(new GitHubStrategy({
  clientID: 'a7e7e6502c553d7fec1d',
  clientSecret: 'c361dd0d76e3565f8818c427a79592bd810db80e',
  callbackURL: "http://localhost:3001/auth-github"
},
function(accessToken, refreshToken, profile, cb) {
  // console.log('profile: ', profile);
  console.log(111, accessToken, refreshToken);
  return cb(null, profile);
}
));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// app.use(session({ secret: "Express rulles!" }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
