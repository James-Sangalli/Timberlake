var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entry');
});

router.get('/client', function(req, res, next) {
  console.log('session', req.session.userId)
  if (req.session.userId) {
    res.render('client');
  } else {
    res.redirect('/')
  }

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

router.get("/api/user/", function(req, res) {
  if (req.session.userId){
    var userId = req.session.userId
    knex.select('first_name', 'last_name', 'balance').from('users').innerJoin('balances', 'users.id', 'balances.id').where('balances.id', userId)
      .then(function(resp) {
        console.log(resp[0]);
        res.send(resp[0]);
      })
  } else {
    res.send("AUTHORISATION ERROR!")
  }
})

router.post("/api/users/", function(req, res) {
  var user = { last_name: req.body.last_name }
  knex('users').where(user).then(function(result){
    var unverifiedUser = result[0]

    if (unverifiedUser.password_hash === req.body.password){
      req.session.userId = unverifiedUser.id
      res.redirect('/client')
    } else {
      res.redirect('/')
    }
  })
})



module.exports = router;
