const express = require('express');

const app = express();


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

app.all('*', function(req, res) {
    res.send('Express home ALL');
});


app.listen(3000);