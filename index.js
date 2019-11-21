const path = require('path');

const express = require('express');

const app = express();


const myMiddleware = (req, res, next) => {
    console.log("Middleware at work!");
    res.locals.myMiddleStuff = 'Middleware run!'
    next();
}

app.use(express.static('public'));

app.use('/mid', myMiddleware);

app.get('/', function(req, res) {
    res.send('Express home GET');
});

app.post('/', function(req, res) {
    res.send('Express home POST');
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
    console.log(res.locals.myMiddleStuff);
    res.send('No page found...');
});


app.listen(3000);