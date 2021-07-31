const mongoose = require('mongoose');

const Event = require('../models/event')
const Comment = require('../models/comment');
const { event } = require('../routes');


async function getEventDetails(req, res) {
    Event.findById(req.params.id, (err, event, user) => {
      Comment.find({event: mongoose.Types.ObjectId(req.params.id)}, (err, comment) => {
        
        if (err)  return res.send(err)
        else if (req.body)

        res.render(`event-details`, {event, user, comment})
    })
    if (err)  return res.send(err);   
    }).populate({path: 'location'})
    
}


async function addComment(req, res) {
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


async function updateComment(req, res, next) {
    comment = Comment
        console.log(comment)
        console.log(req.body)
    comment.updateOne({_id: req.params.id}, event).then(
    () => {
        $set:{
            comment: ''
        }
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
  res.redirect(`/user/event-details/${req.params.id}`)
}

async function deleteComment(req, res) {
    Comment.findByIdAndRemove(req.params.id, (err, event) => {
        if (err) {
            return res.send("on no", err)
        }
        res.send(event)
        res.redirect(`/user/event-details/${req.params.id}`)
    })
}



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}


module.exports = {
    addComment,
    isLoggedIn,
    getEventDetails,
    updateComment,
   deleteComment
   
}