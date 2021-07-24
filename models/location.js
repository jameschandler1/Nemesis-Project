const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const locationSchema = new Schema({
    post: {type: String, required: true},
    events: {type: Schema.Types.ObjectId, ref: "event"},
});

module.exports = mongoose.model("location", locationSchema);