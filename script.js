var express = require('express');

var app = express.createServer();
app.use(express.bodyParser());

var recipes = require('./growing.js');

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'What's in season?'});
});

app.get('/growing', growing.list);

app.get('/growing/location', function(req, res) {
  res.render('location.ejs', {title: 'Where are you?'});
});

app.post('/growing/location', growing.location);

app.get('/growing/:title', growing.single);

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);
