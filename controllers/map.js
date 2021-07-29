const Location = require('../models/location');

// function render (req, res) {

//     res.render('map');
// };

function locationList(req, res) {
    Location.find({}, (err, location) => {
        if (err) {
            return res.send(err)
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