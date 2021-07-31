const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');


router.patch('/:id', commentCtrl.isLoggedIn, commentCtrl.updateComment)
router.delete('/:id', commentCtrl.isLoggedIn, commentCtrl.deleteComment)

module.exports = router;