const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./app/config/db');
var session = require('express-session')
app.use(express.static(path.join(__dirname, 'public')));
// http logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// session
app.set('trust proxy', 1)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});