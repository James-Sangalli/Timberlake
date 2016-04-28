var express = require('express');
var router = express.Router();
var fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entry', { title: 'Express' });
});

router.get('/client', function(req, res, next) {
  res.render('client', { title: 'Express' });
})

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

router.get("/api/getBalance/:id", function(req, res) {
  var id = req.params.id;

  knex.select('balance').from('users').innerJoin('balances', 'users.id','balances.id').where('balances.id',id)
    .then(function(resp) {
      console.log(resp);
      res.send(resp);
    })
});

module.exports = router;
