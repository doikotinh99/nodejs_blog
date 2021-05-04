var express = require('express');
var router = express.Router();
const news = require('../app/controllers/news');

// news.index


router.use('/show', news.chitiet);
router.use('/', news.index);

module.exports = router;