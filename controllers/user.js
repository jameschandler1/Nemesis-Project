const User = require('../models/user')


function index(req, res, next) {
    User.findById(req.params.id, (err, user) => {
        res.render('user/index', {
            user: req.user,
        })
    })
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}

function socket(req, res) {
    User.findById(req.params.id, (err, user) => {
        res.sendFile(__dirname + '/index.html')
    })
}

// function userIndex(req, res, next) {
//     User.find({}, (err, user) => {
//         res.render
//     })
// }

module.exports = {
    index,
    isLoggedIn,
    socket,
}