const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/event-details');



router.get('/:id',  eventCtrl.isLoggedIn, eventCtrl.getEventDetails)

router.post(`/:id`, eventCtrl.isLoggedIn, eventCtrl.addComment)


module.exports = router;