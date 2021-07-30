const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/event-details');
const event = require('../models/event')



router.get('/:id',  eventCtrl.isLoggedIn, eventCtrl.getEventDetails)

// router.get('/:id', eventCtrl.findComment)

router.post(`/:id`, eventCtrl.addComment)



module.exports = router;