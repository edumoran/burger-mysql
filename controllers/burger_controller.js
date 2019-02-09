//npm packages
var express = require("express");
var router = express.Router();
//model import
var burger = require("../models/burger.js");

//Create all our routes and set up logic within those routes where required.
//The following lines were taken and adapted from the cats exercise (I went over it line by line to try to understand it)

//Here we set the route to the index
router.get('/', function(req,res) {
  burger.all(function(burger_data) {
    res.render("index", {burger_data});
  });
});

//Use .put to update the items in the db
router.put('/burgers/update', function(req, res) {
  burger.update(req.body.burger_id, function(result){
    res.redirect('/');
  });
});

router.post('/burgers/create', function (req, res) {
  burger.create(req.body.name, function (result) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
