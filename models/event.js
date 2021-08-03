const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const eventSchema = new Schema({
    title: {type: String, required: true,},
    description: {type: String},
    start: {type: Date, required: true, default: Date.now},
    end: {type: Date, required: true, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    location: {type: Schema.Types.ObjectId, ref: "Location"},
    comment: {type: Schema.Types.ObjectId, ref: "Comment"},
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
eventSchema.plugin(uniqueValidator);