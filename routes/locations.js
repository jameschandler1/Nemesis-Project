const express = require('express');
const router = express.Router();
const locationCtrl = require('../controllers/location');

router.get('/', locationCtrl.index)

router.get('/:id', locationCtrl.show)

module.exports = router;