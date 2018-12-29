const https = require('https');

var express = require('express'),
    port = process.env.PORT || 8080,
    time = require('./time'),
    app = express();

app.get('/', function (req, res, next) {
    res.write('Hello, World!\n');
    res.write(time.calcTime('\nNew York: ', '-5'));
    res.write(time.calcTime('\nColorado: ', '-8'));
    res.write(time.calcTime('\nCalifornia: ', '-7'));
    res.end();
});

//delete when finished
app.listen(port, () => {
    console.log('listening on port 8080');
});

// if (https.redirect == true) {
//     app.get('/', function (req, res, next) {
//         res.write('Hello, World!\n');
//         res.write(time.calcTime('\nNew York: ', '-5'));
//         res.write(time.calcTime('\nColorado: ', '-8'));
//         res.write(time.calcTime('\nCalifornia: ', '-7'));
//         res.end();
//     });    
//     console.log("page was reloaded");
// }
