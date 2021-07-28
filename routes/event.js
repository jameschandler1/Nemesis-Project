const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/event');

router.get('/', eventCtrl.render);
module.exports = router;