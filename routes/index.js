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


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//getbalance
//transfer balance
//transaction history


router.get("/api/getBalance/:id", function(req, res) {
  var id = req.params.id - 1;
  // fs.readFile("./userData.json", "utf8", (err, data) => {
  //   if (err) throw err;
  //   var results = JSON.parse(data)
  //   var userInfo = results.filter(function(i) {
  //     return i.id === id
  //   });
  //   res.send(JSON.stringify(userInfo[0].balance))
  // })

  // knex.select().from('users').where('id',id)
  // .then(function(resp){
  //   console.log(resp)
  //   res.send(resp[0].last_name)
  // })

knex.select('balance').from('users').innerJoin('transactions', 'users.id', 'transactions.id').where('transactions.id',id)
  .then(function(resp) {

    console.log(resp);
    res.send(resp);
  })
});

module.exports = router;
