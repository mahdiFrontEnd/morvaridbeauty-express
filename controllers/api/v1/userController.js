exports.login = function (req, res) {
    let data;

    sess = req.session;
    sess.username = req.body.username;
    sess._token = '123456';
    data = {status: 200, message: 'ورود با موفقیت انجام شد'}


// res.redirect('/' + sess.room_id);
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(data));

};
