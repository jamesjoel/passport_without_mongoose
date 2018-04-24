var express = require('express');
var router = express.Router();

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

router.use('/', require('./home'));
router.use('/login', require('./login'));
router.use('/user', isLoggedIn, require('./user'));

module.exports=router;