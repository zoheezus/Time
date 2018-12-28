const https = require('https');

var express = require('express');
var port = process.env.PORT || 8080;
var time = require('./time');
var app = express();

app.get('/', function (req, res, next) {
    res.write('Hello, World!\n');
    res.write(time.calculateTime('\nNew York: ', '-5'));
    res.write(time.calculateTime('\nColorado: ', '-8'));
    res.write(time.calculateTime('\nCalifornia: ', '-7'));
    res.end();
});

app.listen(port, () => { //use function () if err
    console.log('listening on port 8080');
});