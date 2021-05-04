var express = require('express');
var router = express.Router();
const user = require('../app/controllers/User.controller');

router.get('/logout', user.logout);
router.post('/checklogin/:data', user.checklogin);
router.get('/', user.index);

module.exports = router;