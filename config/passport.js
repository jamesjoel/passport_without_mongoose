var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/users');

passport.serializeUser(function(user, done) {
  console.log('---------------Ser', user._id);
  done(null, user._id);

});

passport.deserializeUser(function(_id, done) {
	
  console.log('---------------Des', _id);
    done(null, _id);
});


passport.use("local-login", new LocalStrategy(function(username, password, done){
		User.findOne({ username : username }, function(err, doc){
			if(err){
				console.log("Connection Error", err);
				return;
			}
			if(doc){
				if(doc.password == password){
					return done(null, doc, true);
				}
				else{
						return done(null, false, { message: 'Incorrect password.' });
				}
			}
			return done(null, false, { message : "Incorrect Username" });
		});
	 }
));
module.exports=passport;
