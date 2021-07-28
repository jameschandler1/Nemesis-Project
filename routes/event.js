const express = require('express');
const router = express.Router();

router.get('/event', function(req, res) {
    res.render('event');
});

module.exports = router;