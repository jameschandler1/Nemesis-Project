const Event = require('../models/event')
const location = require('../models/location')
const user = require('../models/user')

function renderEvent(req, res) {
    res.render('event')
}

function createEvent(req, res) {
    console.log(req.body);
    const event = new Event(req.body);
    event.save(err => {
        console.log('its saved!!')
       if (err)
       return res.send(err);
       return res.redirect('/user/main')
   })
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}



module.exports = {
    createEvent,
    isLoggedIn,
    renderEvent,
}