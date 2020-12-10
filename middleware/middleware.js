exports.auth = function (req, res, next) {
    let session = req.session;
    if (!session._token) {
        res.redirect('/login');
        return
    }
    console.log('auth');
    next();
};


exports.fooMiddleware = (req, res, next) => {
    // console.log('foo');
    next();
}

exports.barMiddleware = (req, res, next) => {
    // console.log('bar');
    next();
}
