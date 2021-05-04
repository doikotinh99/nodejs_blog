const db = require("../config/db");
var data = [];
class Product_models {
    get_product() {
        db.query('SELECT * from products', function(error, results, fields) {
            if (error) {
                data = false;
                return error;
            } else {
                return data = results;
            }
        });
        return data;
    }
}
module.exports = new Product_models;