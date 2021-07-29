const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/event');

router.get('/',  eventCtrl.isLoggedIn, eventCtrl.renderEvent)
router.post('/', eventCtrl.createEvent);

module.exports = router;