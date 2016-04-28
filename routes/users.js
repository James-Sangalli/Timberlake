var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user');
});

router.post('/', function(req,res){
  bcrypt.hash(req.body.password, saltRounds, function(err, hash){
    var newUser = {}
    newUser.last_name = req.body.last_name
    newUser.first_name = req.body.first_name
    newUser.password_hash = hash
    knex('users').insert(newUser).then(function(result){
      req.session.userId = result
      res.render('client');
    }).catch(function(error){
      res.redirect('sign-up')
    })
  })
})

module.exports = router;
