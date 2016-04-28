var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entry');
});

router.get('/client', function(req, res, next) {
  res.render('client');
});

var config = require('../database/knexfile.js')
var env = process.env.NODE_ENV || 'development'
// var bcrypt = require('bcrypt')

var knex = require('knex')(config[env])

//transfer balance
//transaction history
//login
// API SET UP
// Shows balance of user by id
router.get("/api/getBalance/:id", function(req, res) {
  var id = req.params.id;

  knex.select('balance').from('users').innerJoin('balances', 'users.id', 'balances.id').where('balances.id', id)
    .then(function(resp) {
      console.log(resp[0]);
      res.send(resp[0]);
    })
})

// Shows user first and last name by id
router.get("/api/users/:id", function(req, res) {
  var id = req.params.id;

  knex.select('first_name', 'last_name', 'balance').from('users').innerJoin('balances', 'users.id', 'balances.id').where('balances.id', id)
    .then(function(resp) {
      console.log(resp[0]);
      res.send(resp[0]);
    })
})

// Shows all users and their info
router.get("/api/users/", function(req, res) {

  knex.select('first_name', 'last_name', 'balance').from('users').innerJoin('balances', 'users.id', 'balances.id')
    .then(function(resp) {
      console.log(resp[0]);
      res.send(resp);
    })
})


module.exports = router;
