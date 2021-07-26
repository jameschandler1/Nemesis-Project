const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: {type: String},
    email: {type: String, required: true},
    name: {type: String, required: true },
    events: {type: Schema.Types.ObjectId, ref: "Event"},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
