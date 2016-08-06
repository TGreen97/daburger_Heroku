/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var router = express.Router();
var models = require('../models/burgers.js');
//models.burgers.sync();

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  models.burgers.findAll().then(function (data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/insertOne', function (req, res) {
  models.burgers.insertOne({burger_name: req.body.burger_name, devoured: false}).then (function () {
    res.redirect('/burgers');
  });
});

router.put('/burgers/updateOne/:id', function (req, res) {
  //var condition = 'id = ' + req.params.id;

  //console.log('condition', condition);

  models.burgers.updateOne({ devoured: req.body.devoured }, {where: {id: req.params.id}}).then( function () {
    res.redirect('/burgers');
  });
});


module.exports = router;
