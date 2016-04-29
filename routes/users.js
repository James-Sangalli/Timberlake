var express = require('express');
var router = express.Router();

var config = require('../database/knexfile.js')
var env = process.env.NODE_ENV || 'development'
var knex = require('knex')(config[env])

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/transaction',function(req,res){
  var userId= req.session.userId
  var lastName= req.body.last_name
  var amount =req.body.amount
  var confirm= req.body.confirm
  var logReciever;
  console.log(userId)
  knex.select('*').from('users').innerJoin('balances', 'users.id', 'balances.id').where('last_name', lastName)
  .then(function(data){
    logReciever= data[0].first_name+' '+data[0].last_name;
    var _reciever={balance:Number(data[0].balance)+Number(amount),id: data[0].id}
    console.log('_reciever',_reciever)
    knex('balances').where('id',userId).then(function(data1){
      var _sender=Object.assign({},data1[0],{balance:Number(data1[0].balance)-Number(amount)})
      console.log('_sender',_sender)
      knex('balances').where('id',data[0].id).update(_reciever).then(function(){
        knex('balances').where('id',userId).update(_sender).then(function(){
          logit(userId,logReciever,amount,res)
        })
      })
    })


  })

})


function logit(userId,logReciever,amount,res){
  knex('users').where('id',userId).then(function(info){
    var logSender= info[0].first_name+' '+info[0].last_name;
    knex('history').insert({userID:userId,transaction:amount,payee:logReciever}).then(function(){
      console.log('info',info)
      res.send('ok')
    })
  })
}

module.exports = router;
