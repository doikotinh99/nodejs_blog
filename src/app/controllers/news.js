class News {
    index(req, res) {
        res.render('news');
    }
    chitiet(req, res) {
        res.render('news');
    }
}
module.exports = new News;