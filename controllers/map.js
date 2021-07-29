const Location = require('../models/location');

// function render (req, res) {

//     res.render('map');
// };

function locationList(req, res) {
    Location.find({}, function(err, location) {
        if (err) {
            console.log(err)
        }
        else {
        res.render('map', {location});
        }
    });
};


module.exports = {
    // render,
    locationList,
};