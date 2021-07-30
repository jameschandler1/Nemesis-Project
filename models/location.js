const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const locationSchema = new Schema({
    post: {type: String, required: true},
    name: {type: String},
    comment: {type: Schema.Types.ObjectId, ref: "Comment"} 
});

const Location = mongoose.model('Location', locationSchema, "Locations")
module.exports = Location;