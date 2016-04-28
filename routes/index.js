var express = require('express');
var router = express.Router();
var fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entry');
});

router.get('/client', function(req, res, next) {
  res.render('client');
});

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './database/dev.sqlite3'
  },
  useNullAsDefault: true
})

//transfer balance
//transaction history
//login
// API SET UP
router.get("/api/getBalance/:id", function(req, res) {
  var id = req.params.id;

  knex.select('balance').from('users').innerJoin('balances', 'users.id','balances.id').where('balances.id',id)
    .then(function(resp) {
      console.log(resp);
      res.send(resp);
    })
})

router.get("/api/users/:id", function(req, res) {
  var id = req.params.id;

  knex.select('first_name','last_name', 'balance').from('users').innerJoin('balances', 'users.id','balances.id').where('balances.id',id)
    .then(function(resp) {
      console.log(resp);
      res.send(resp);
    })
})


module.exports = router;
