const path = require('path');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.param('number', function(req, res, next, id) {
    console.log('Params called: ', id);
    next();
})

app.use('/login', function(req, res, next) {
    if (req.query.msg === 'fail') {
        res.locals.msg = 'Wrong username and/or password!';
    } else {
        res.locals.msg = '';
    }

    next();
});


app.get('/', function(req, res) {
    res.send('Express started!');
});

app.get('/login', function(req, res) {
    res.render('login-page');
});

app.get('/welcome', function(req, res) {
    res.render('welcome-page', { email: req.cookies.email });
});

app.get('/story/:number', function(req, res) {
    res.send(`Story ${req.params.number}`);
});

app.get('/statement', function(req, res) {
    res.download(path.join(__dirname, 'statements/statement.png'), 'optional-statement-name');
});

app.get('/process_logout', function(req, res) {
    res.clearCookie('email');
    res.redirect('/login');
});


app.post('/process_login', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    if (password === 'x') {
        res.cookie('email', email);
        res.redirect('/welcome');
    } else {
        res.redirect('/login?msg=fail&test=ok');
    }
});


app.listen(3000, console.log(new Date().toLocaleTimeString() + ' - listening on port 3000'));
