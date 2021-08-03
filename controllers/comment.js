const mongoose = require('mongoose');
const Event = require('../models/event')
const Comment = require('../models/comment');


function updateComment(req, res) {
       console.log(req.body.comment)
       Event.findById(req.params.id, (err, event, user) => {
       Comment.findByIdAndUpdate(req.params.id,
        {$set: {...req.body}
        },
        {new: true},  
        function (err, updatedComment){
            if (err) return res.send(err);
            return res.render(`user-details`, {event});
    }).populate({path: 'location'})
    })
}

function deleteComment(req, res) {
    Comment.findByIdAndRemove(req.params.id, (err, event) => {
        if (err)
        res.send(event)
        return res.render(`event-details`, {event})
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