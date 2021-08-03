const mongoose = require('mongoose');
const Event = require('../models/event')
const Comment = require('../models/comment');
const Location = require('../models/location');

function addComment(req, res) {
    req.body.user = mongoose.Types.ObjectId(req.user.id)
    req.body.event = mongoose.Types.ObjectId(req.params.id)
    console.log('comment im making');
    console.log(req.body);
    Comment.create(req.body, (err, comment) => {
    console.log(comment);
       if (err)
        res.send(err);
       return res.redirect(`/user/event-details/${req.params.id}`,)
   })
}

function getEventDetails(req, res) {

 Event.findById(req.params.id, (err, event, user, location) => {
    Comment.find({event: req.params.id}, (err, comment) => {
        if (err) res.send(err)
        res.render('event-details', {event, comment, user, location})
    })
 }).populate({path: 'location'});
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    return res.redirect('/auth/google')
}


// function updateComment(req, res) {
//        console.log(req.body.comment)
//        Event.findById(req.params.id, (err, event, user) => {
//        Comment.findByIdAndUpdate(req.params.id,
//         {$set: {...req.body}
//         },
//         {new: true},  
//         function (err, updatedComment){
//             if (err) return res.send(err);
//             return res.redirect(`/user/event-details/`);
//     })
//     })
// }




module.exports = {
   
    addComment,
    isLoggedIn,
    getEventDetails,
    // updateComment,

   
}