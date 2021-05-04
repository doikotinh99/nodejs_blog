const user = require("../models/User.model");
var session = require('express-session');
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
            check = JSON.parse(check);
            req.session.user = check;
            return res.send(req.session.user);
        }
        return res.send("false");
    }
}
module.exports = new UserController;