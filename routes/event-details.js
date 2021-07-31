const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/event-details');
const event = require('../models/event')


router.get('/:id',  eventCtrl.isLoggedIn, eventCtrl.getEventDetails)
router.post(`/:id`, eventCtrl.isLoggedIn, eventCtrl.addComment)
router.patch('/:id', eventCtrl.isLoggedIn, eventCtrl.updateComment)
router.delete('/:id', eventCtrl.isLoggedIn, eventCtrl.deleteComment)

module.exports = router;