var express = require('express');
var router = express.Router();
var fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//getbalance
//transfer balance
//transaction history


router.get("/api/getBalance/:id",function(req,res){
  var id = req.params.id-1;
  fs.readFile("./userData.json", "utf8",(err,data) =>{
    if (err) throw err;
    var results = JSON.parse(data)
    var userInfo = results.filter(function(i){
      console.log(i.id === id)
      return i.id === id
    });
    console.log(userInfo[0].balance)
    res.send(JSON.stringify(userInfo[0].balance))
  })

});


module.exports = router;
