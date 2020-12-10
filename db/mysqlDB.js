const DB = require('mysql');
const config = require('../config');
const connection = DB.createConnection({
    host: config.mysqlHost,
    user: config.mysqlUser,
    password: config.mysqlPassword,
    database: config.mysqlDatabase,
    port: config.mysqlPort,
    socketPath: config.mysqlSocketPath,


});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
