const mongoose = require('mongoose');

const Event = require('../models/event')
const Comment = require('../models/comment');


function getEventDetails(req, res) {
    Event.findById(req.params.id, (err, event, user) => {
      Comment.find({event: mongoose.Types.ObjectId(req.params.id)}, (err, comment) => {
        
        if (err)  return res.send(err)
        else if (req.body)

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
       return res.send(err);
       return res.redirect(`/user/event-details/${req.params.id}`)
   })
}







// function findComment(req, res) {
//     Comment.findById(req.params.id, (err, comment) => {
//         if (err) {
//         return res.send(err)
//         }
//         else {
//             comment.event.push(req.body)
//             comment.save(err => {
//                 res.redirect(`/user/event-details/${req.params.id}`)
//             })
//         }
//     })
// }


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}


module.exports = {
    addComment,
    isLoggedIn,
    getEventDetails,
    // findComment
   
}