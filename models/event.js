const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {type: String, required: true,},
    guests: {type: String},
    description: {type: String},
    start: {type: Date, required: true, default: Date.now},
    end: {type: Date, required: true, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: "user"},
    comments: {type: Schema.Types.ObjectId, ref: "comment"},
    location: {type: Schema.Types.ObjectId, ref: "location"},
});

module.exports = mongoose.model("event", eventSchema);