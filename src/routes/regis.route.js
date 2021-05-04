var express = require('express');
var router = express.Router();
const user = require('../app/controllers/User.controller');

router.post('/checkregis/:data', user.checkregis);
router.get('/', user.index);

module.exports = router;