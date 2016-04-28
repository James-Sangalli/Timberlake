var express = require('express');
var router = express.Router();
var fs = require("fs")

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './database/dev.sqlite3'
  },
  useNullAsDefault: true
})

//getbalance
//transfer balance
//transaction history


router.get("/api/getBalance/:id", function(req, res) {
  var id = req.params.id;

  knex.select('balance').from('users').innerJoin('transactions', 'users.id', 'transactions.id').where('transactions.id',id)
    .then(function(resp) {

      console.log(resp);
      res.send(resp);
    })
});

module.exports = router;
