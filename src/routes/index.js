const news = require('./news');
const search = require('./search.route');
const home = require("./home.route");
const regis = require("./regis.route");
const login = require("./login.route");

function route(app) {
    app.use('/login', login);
    app.use('/news', news);
    app.use('/search', search);
    app.use('/regis', regis);
    app.use('/', home);

}
module.exports = route;