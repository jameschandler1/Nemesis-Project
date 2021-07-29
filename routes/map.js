const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/map');


// router.get('/', eventCtrl.render);
router.get('/', eventCtrl.locationList)

module.exports = router;