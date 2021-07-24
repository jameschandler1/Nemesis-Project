const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/location');

router.get('/', indexCtrl.index)

module.exports = router;