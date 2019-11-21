const path = require('path');
const express = require('express');

const app = express();


const myMiddleware = (req, res, next) => {
    console.log("Middleware at work!");
    res.locals.myMiddleStuff = 'Middleware run!'
    next();
}

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/mid', myMiddleware);


app.get('/', function(req, res) {
    res.send('Express home GET');
});


app.post('/', function(req, res) {
    res.send('Express home POST');
});

app.post('/ajax', function(req, res) {
    console.log('Response from POST/ajax: ', req.body.name);
    res.send('POST/ajax');
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