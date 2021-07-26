const Location = require('../models/location')

// function index(req, res) {
//     res.render('location/index');
// }

function locationDetails(req, res) {
    Location.find({},  (err, location) => {
        if (err) {
            return res.send(err)
        }
        else {
            res.render('location/index', {location})
        }
    })
}
  
module.exports = {
    // index,
    show: locationDetails,
}