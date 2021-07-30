const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const commentSchema = new Schema({
//     comment: {type: String, required: true},
//     user: {type: Schema.Types.ObjectId, ref: "User"},
// });

const eventSchema = new Schema({
    title: {type: String, required: true,},
    description: {type: String},
    start: {type: Date, required: true, default: Date.now},
    end: {type: Date, required: true, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    location: {type: Schema.Types.ObjectId, ref: "Location"},
    comment: {type: Schema.Types.ObjectId, ref: "Comment"},
});

// const Comment = mongoose.model("Comment", commentSchema);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;