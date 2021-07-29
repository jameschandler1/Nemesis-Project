const express = require('express');
const router = express.Router();
const mainCtrl = require('../controllers/main');

// router.get('/', eventCtrl.render);
router.get('/',  mainCtrl.isLoggedIn, mainCtrl.getEvent);
router.delete('/:id', mainCtrl.deleteEvent)

module.exports = router;