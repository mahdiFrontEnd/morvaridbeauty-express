let con = require('../db/mysqlDB')

class DB {

    constructor(table) {
        this.table = table;
    }

    table(table) {
        this.table = table;
        // return this;
    }

    create() {

    }

    get() {


        return this.query();
    }

    first() {

    }

    last() {

    }

    update() {

    }

    delete(id) {

    }

    where() {

    }

    orderByDesc() {

    }

    orderBy() {

    }

    query() {
          con.query("SELECT * FROM users limit 22", function (err, result, fields) {
            return  {a:11};
            if (err) throw err;
              return  result;
        });


    }
}

module.exports = DB;
