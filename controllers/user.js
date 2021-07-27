const User = require('../models/user')


function userIndex(req, res, next) {
    User.find({}, (err, user) => {
        res.render('users', {
            user,
            user: req.user,
        })
    })
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}
module.exports = {
    index: userIndex,
    isLoggedIn,
}