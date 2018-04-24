var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	console.log(req.session.passport);
	res.send('<h1>user page</h1>');
});

module.exports=router;