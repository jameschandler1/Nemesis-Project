const event = require('../models/event')



function createEvent(req, res) {
    const event = new Event(req.body);
    event.save(err => {
        if (err) 
        return res.send(err);
        return res.redirect('/user/main');
    })
}
