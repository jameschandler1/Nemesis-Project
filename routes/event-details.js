const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/event-details');
const event = require('../models/event')


router.patch('/:id', eventCtrl.updateComment)
router.get('/:id',  eventCtrl.isLoggedIn, eventCtrl.getEventDetails)
router.post(`/:id`, eventCtrl.addComment)
router.delete('/:id', eventCtrl.deleteComment)





module.exports = router;