var express = require('express');
var router = express.Router();
const home = require('../app/controllers/home_controller');

// news.index

router.use('/', home.index);

module.exports = router;