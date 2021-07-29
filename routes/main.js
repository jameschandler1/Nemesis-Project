const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/main');

router.get('/', eventCtrl.render);

module.exports = router;