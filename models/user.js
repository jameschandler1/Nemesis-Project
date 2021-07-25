const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true },
    events: {type: Schema.Types.ObjectId, ref: "event"},
    comments: [{type: Schema.Types.ObjectId, ref: "comment"}],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
