const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const locationSchema = new Schema({
    post: {type: String, required: true},
    name: {type: String}
});

const Location = mongoose.model('Location', locationSchema, "Locations")
module.exports = Location;