const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var path = require('path');
var cors = require('cors');
var middleware = require('./middleware/middleware');
var siteController = require('./controllers/site/SiteController');
const expressLayouts = require('express-ejs-layouts')
const Router = require('express-group-router');
var session = require('express-session')
var https = require('https');
var http = require('http');
var fs = require('fs');


var options = {
    ca: fs.readFileSync('./ssl/livenegah.ir/chain.crt'),
    key: fs.readFileSync('./ssl/livenegah.ir/apache.key'),
    cert: fs.readFileSync('./ssl/livenegah.ir/apache.crt')
};



var port = process.env.PORT || 2000;

app.use(session({secret: 'ssshhhhh', saveUninitialized: true, resave: true}));

app.use("/public", express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Set Templating Engine
app.use(expressLayouts)
app.use(
    cors({
        origin: ['*'],
        credential: true
    })
);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', './layouts/layout');

let router = new Router();

router.group('/user', [middleware.auth], (router) => {
    router.get('/home', siteController.index)
    router.get('/list', siteController.about_us)
    // router.get("*", siteController.error);
});

router.group('/', [middleware.fooMiddleware], (router) => {
    router.get('/', siteController.index)
    router.get('/about_us', siteController.about_us)
    router.get('/contact_us', siteController.contact_us)
    router.get('/gallery', siteController.gallery)
    router.get('/blog', siteController.blog)
    router.get('/pricing', siteController.pricing)
    router.get('/services', siteController.services)


    router.get('/login', siteController.showLoginForm)
    router.post('/login', siteController.login)
    router.get("*", siteController.error);
});




app.use(router.init());

var server = https.createServer(options, app, function () {
    console.log('listening for requests on port ' + port);
});


server.listen(port, function () {
    console.log('listening for requests on port ' + port);
});
// app.listen(port);

