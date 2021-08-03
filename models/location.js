const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


const locationSchema = new Schema({
    post: {type: String, required: true},
    name: {type: String},
    comment: {type: Schema.Types.ObjectId, ref: "Comment"},
    
});

const Location = mongoose.model('Location', locationSchema, "Locations")
module.exports = Location;
locationSchema.plugin(uniqueValidator);

// const Location = require('../seed')

// module.exports = {
//     Location,
// }