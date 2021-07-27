const router = require('express').Router();
const userCtrl = require('../controllers/user')

router.get('/', userCtrl.isLoggedIn, userCtrl.index)


module.exports = router