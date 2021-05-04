var express = require('express');
var router = express.Router();
const news = require('../app/controllers/search_controller');

// news.index


router.use('/', news.index);

module.exports = router;