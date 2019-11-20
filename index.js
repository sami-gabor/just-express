const path = require('path');

const express = require('express');

const app = express();


app.use(express.static('public'));

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
    res.send('No page found...');
});


app.listen(3000);