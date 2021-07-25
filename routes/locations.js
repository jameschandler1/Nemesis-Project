const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/location');

router.get('/', indexCtrl.index)

router.get('/:id', indexCtrl.show)


module.exports = router;