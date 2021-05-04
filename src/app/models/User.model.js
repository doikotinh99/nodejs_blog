const db = require("../config/db");
const bcrypt = require('bcrypt');
var query = "";
var data = [];
class UserModel {
    CheckRegis(dataJson) {
        dataJson = JSON.parse(dataJson);
        const hashedPassword = bcrypt.hashSync(dataJson.regis_pass, 10);
        if (this.CheckUser(dataJson.user_name)) {
            return "user";
        }
        this.query = "INSERT INTO `user`(`user_name`, `user_lastname`, `user_firstname`, `user_email`, `password`, `user_job`, `user_comp`, `user_country`, `id_role`, `user_status`) VALUES ('" + dataJson.user_name + "', '" + dataJson.regis_LName + "', '" + dataJson.regis_FName + "', '" + dataJson.regis_email + "', '" + hashedPassword + "', '" + dataJson.regis_job + "', '" + dataJson.regis_comp + "', '" + dataJson.regis_country + "', 1, 1)";
        db.query(this.query);
        return "ok";
    }
    CheckUser(user_name) {
        db.query('SELECT * FROM `user` WHERE `user_name` = ' + user_name, function(error, results, fields) {
            this.data = results;
        });
        if (this.data) {
            return true;
        } else {
            return false;
        }
    }
    CheckLogin(dataJson) {
        dataJson = JSON.parse(dataJson);
        query = "SELECT * FROM `user` WHERE `user_name` = '" + dataJson.user_name + "'";
        db.query(query, function(error, results, fields) {
            if (!error) {
                if (results) {
                    console.log(results[0].password + ", pass = " + dataJson.pass);
                    if (bcrypt.compareSync(dataJson.pass, results[0].password)) {
                        data = results[0].id;
                        data = data.toString();
                    } else {
                        data = false;
                    }
                } else {
                    data = false;
                }
            } else {
                data = false;
            }
        });
        return data;

    }
}
module.exports = new UserModel;