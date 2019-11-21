const path = require('path');
const express = require('express');
const helmet = require('helmet');
const ejs = require('ejs');
const pug = require('pug');

const app = express();


const myMiddleware = (req, res, next) => {
    console.log("Middleware at work!");
    res.locals.myMiddleStuff = 'Middleware run!'
    next();
}

app.use(helmet());
app.use(express.static('public'));
app.use(express.json()); // creaes req.body
app.use(express.urlencoded({extended: false})); // adds data to req.body
app.use('/mid', myMiddleware);


app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.send('Express home GET');
});

app.get('/ejs', function(req, res) {
    res.render('index');
});


// app.set('view engine', 'pug');
// app.get('/pug', function(req, res) {
//     res.render('index');
// });

// app.set('view engine', 'hbs');
// app.get('/hbs', function(req, res) {
//     res.render('index');
// });


app.post('/', function(req, res) {
    res.send('Express home POST');
});

app.post('/ajax', function(req, res) {
    console.log('Response from POST/ajax - req.body: ', req.body);
    // console.log('Response from POST/ajax - id: ', req.id);
    // console.log('Response from POST/ajax - path: ', req.path);
    // console.log('Response from POST/ajax - headers: ', req.headers);
    res.json('POST/ajax');
});


app.put('/', function(req, res) {
    res.send('Express home PUT');
});


app.delete('/', function(req, res) {
    res.send('Express home DELETE');
});


app.all('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.all('*', function(req, res) {
    res.send('No page found...');
});


app.listen(3000);