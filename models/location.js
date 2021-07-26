const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const locationSchema = new Schema({
    post: {type: String, required: true},
    events: {type: Schema.Types.ObjectId, ref: "Event"},
    name: {type: String}
});

const Location = mongoose.model('Location', locationSchema)
module.exports = Location;