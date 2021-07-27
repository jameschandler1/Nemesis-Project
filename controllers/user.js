const User = require('../models/user')


function index(req, res, next) {
    User.find({}, (err, user) => {
        res.render('user/index', {
            user,
            user: req.user,
        })
    })
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}

// function userIndex(req, res, next) {
//     User.find({}, (err, user) => {
//         res.render
//     })
// }

module.exports = {
    index,
    isLoggedIn,
}