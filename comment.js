// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get method
app.get('/', function(req, res) {
    res.render('home');
});

// post method
app.post('/comment', function(req, res) {
    var comment = req.body.comment;
    res.send('Your comment: ' + comment);
});

app.listen(3000);