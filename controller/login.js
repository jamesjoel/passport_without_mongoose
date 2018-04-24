var passport = require('../config/passport');
var express = require('express');
var router = express.Router();


router.post('/',  passport.authenticate('local-login', { 
		successRedirect: '/user',
    failureRedirect: '/login',
    failureFlash: true

  })
);


router.get('/', function(req, res){
	console.log(req.flash('error'));
	res.render('login', { msg : req.flash('error')});
});

module.exports=router;