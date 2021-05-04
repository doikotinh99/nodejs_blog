const product = require("../models/product_model");
var session = require('express-session');
class HomeController {
    index(req, res) {
        var data = product.get_product();
        if (req.session.user) {
            var user = req.session.user;
        }
        if (data) {
            res.render('home', { data, 'user': user });
        }
    }
}
module.exports = new HomeController;