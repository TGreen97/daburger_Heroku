var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var exphbs  = require('express-handlebars');
var Sequelize = require('sequelize');

var models = require('./models');

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js'); app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Magic happens on port ' + port);
  });
