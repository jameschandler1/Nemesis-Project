const Event = require('../models/event')
const User = require('../models/user');
//  function render (req, res) {

//     res.render('main');

// };

function getEvent(req, res) {
    Event.find({}, (err, event, user) => {
        if (err)
        return res.send(err);
        res.render('main', {event, user})
    }).populate({path: 'location'})
    
}


function deleteEvent(req, res) {
    Event.findByIdAndRemove(req.params.id, (err, event) => {
        if (err) {
            return res.send("on no", err)
        }
        res.redirect('/user/main')
    })
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}


module.exports = {
    // userFind,
    getEvent,
    deleteEvent,
    isLoggedIn,
    
};