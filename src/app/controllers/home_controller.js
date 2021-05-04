const product = require("../models/product_model");
class HomeController {
    index(req, res) {
        var data = product.get_product();
        if (data) {
            res.render('home', { data });
        }
    }
}
module.exports = new HomeController;