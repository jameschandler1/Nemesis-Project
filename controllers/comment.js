const mongoose = require('mongoose');
const Event = require('../models/event')
const Comment = require('../models/comment');


function updateComment(req, res) {
//    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
       console.log(req.body.comment)
       Comment.findByIdAndUpdate(req.params.id,
        {$set: {...req.body}
        },
        {new: true},  
        function (err, updatedComment){
            if (err) return res.send(err);
            updatedComment;
            return res.redirect(`/user/event-details/${req.params.id}`);
        })
    }

function deleteComment(req, res) {
    Comment.findByIdAndRemove(req.params.id, (err, event) => {
        if (err)
        res.send(event)
        return res.redirect(`/user/event-details/${req.params.id}`)
    })
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