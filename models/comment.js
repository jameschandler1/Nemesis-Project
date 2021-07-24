const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "user"},
    events: {type: Schema.Types.ObjectId, ref: "event"},
});

module.exports = mongoose.model("comment", commentSchema);
