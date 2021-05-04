const user = require("../models/User.model");
class UserController {
    index(req, res) {
        res.render('regis');
    }
    checkregis(req, res) {
        var check = user.CheckRegis(req.params.data);
        res.send(check);
    }
    checklogin(req, res) {
        var check = user.CheckLogin(req.params.data);
        if (check) {
            return res.send(check);
        }
        return res.send("false");
    }
}
module.exports = new UserController;