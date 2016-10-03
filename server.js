// set up =================================
var express = require('express');
var app = express();
var morgan = require('morgan');

// configuration ==========================
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

// listen (start app with node server.js) =
app.listen(8080);
console.log("App listening on port 8080");


app.get('*', function(req, res) {
    res.sendfile('./public/index.html')
});