/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var router = express.Router();
var models = require('../models');
//models.burgers.sync();

router.get('/', function (req, res) {
  res.redirect('/Burgers');
});

router.get('/Burgers', function (req, res) {
  models.Burgers.findAll().then(function (data) {
    res.render('index',{ Burgers: data });
  });
});

router.post('/Burgers/insertOne', function (req, res) {
  models.Burgers.insertOne({burger_name: req.body.burger_name, devoured: false}).then (function () {
    res.redirect('/Burgers');
  });
});

router.put('/Burgers/updateOne/:id', function (req, res) {
  //var condition = 'id = ' + req.params.id;

  //console.log('condition', condition);

  models.Burgers.updateOne({ devoured: req.body.devoured }, {where: {id: req.params.id}}).then( function () {
    res.redirect('/Burgers');
  });
});


module.exports = router;
