const mongoose = require('mongoose');
const Event = require('../models/event')
const Comment = require('../models/comment');
const Location = require('../models/location')


function updateComment(req, res) {
       console.log(req.body.comment)
       Event.findById(req.params.id, (err, event, user) => {
       Comment.findByIdAndUpdate(req.params.id,
        {$set: {...req.body}
        },
        {new: true},  
        function (err, location, comment){
            if (err) return res.send(err);
            console.log(event)
            return res.render(`event-details`, {event, user, location, comment});
    }).populate({path: 'location'})
    })
}

function deleteComment(req, res) {
    const location = Location;
    Comment.findByIdAndRemove(req.params.id, (err, event) => {
        if (err)
        res.send(event)
        return res.render(`event-details`, {event, location})
    }).populate({path: 'location'})
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    return res.redirect('/auth/google')
}

module.exports = {
    deleteComment,
    isLoggedIn,
    updateComment
}