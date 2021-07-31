const mongoose = require('mongoose');
const Event = require('../models/event')
const Comment = require('../models/comment');



function getEventDetails(req, res) {
    Event.findById(req.params.id, (err, event, user) => {
      Comment.find({event: mongoose.Types.ObjectId(req.params.id)}, (err, comment) => {
        // if (req.body)
        res.render(`event-details`, {event, user, comment})
    })
    if (err)  return res.send(err);
       
    }).populate({path: 'location'})
}


function addComment(req, res) {
    req.body.user = mongoose.Types.ObjectId(req.user.id)
    req.body.event = mongoose.Types.ObjectId(req.params.id)
    console.log('comment im making');
    console.log(req.body);
    Comment.create(req.body, (err, comment) => {
    console.log(comment);
       if (err)
        res.send(err);
       return res.redirect(`/user/event-details/${req.params.id}`)
   })
}


function updateComment(req, res) {
   if (mongoose.Types.ObjectId.isValid(req.params.id)) {
       console.log(req.body.comment)
       Comment.findByIdAndUpdate(req.params.id,
        {$set: {comment: JSON.stringify(req.body.comment)}},
        {new: true},
        
        ).then((comment) => {
            console.log(comment)
            if (comment) {
                resolve({success: true, data:comment});
                return res.redirect(`/user/event-details/${req.params.id}`)
            }
            else {
               
            }
        }).catch(err => {
         res.send(err)
        })
   } else {
       
   }
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
    addComment,
    isLoggedIn,
    getEventDetails,
    updateComment,
    deleteComment
   
}