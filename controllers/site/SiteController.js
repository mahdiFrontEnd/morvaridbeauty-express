let DB = require('../../model/DB')
let con = require('../../db/mysqlDB')


exports.index = function (req, res) {
    res.render("site/home", {
        title: "1Man Omadam",
    });

};



exports.contact_us = function (req, res) {

    con.query("SELECT * FROM users limit 22", function (err, result, fields) {
        return  {a:11};
        if (err) throw err;
        return  result;
    });

      res.end('1')
    return ;
    let users = new DB('users').get()
    // users={s:1}
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({users}));

    res.render("site/contact_us", {
        title: " contact_us",
    });

};

exports.services = function (req, res) {
    res.render("site/services", {
        title: "services",
    });

};

exports.gallery = function (req, res) {
    res.render("site/gallery", {
        title: "gallery",
    });

};

exports.pricing = function (req, res) {
    res.render("site/pricing", {
        title: "pricing",
    });

};

exports.blog = function (req, res) {
    res.render("site/blog", {
        title: "blog",
    });

};
exports.about_us = function (req, res) {
    // con.query("SELECT * FROM users limit 1", function (err, result, fields) {
    //     if (err) throw err;
    //     res.render("site/about_us", {
    //         title: "about about",
    //         data: result
    //     });
    // });

    res.render("site/about_us", {
        title: "about about",
        data: []
    });
    // res.render("site/about", {
    //     title: "about about",
    // });

};

exports.login = function (req, res) {
    res.render("site/login", {
        title: "login login",
    });

};

exports.showLoginForm = function (req, res) {
    res.render("site/login", {
        title: "login login",
    });

};

exports.login = function (req, res) {

    sess = req.session;
    sess.username = req.body.username;
    sess._token = '123456';

    res.redirect('user/home')

};

exports.error = function (req, res) {
    res.render("errors/404", {
        title: "404 ",
    });

};

