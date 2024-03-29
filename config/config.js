var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Indhiro123"
});

con.connect(function (err) {
    if (err) throw err;
    let queryDb = `CREATE DATABASE IF NOT EXISTS db_restaurant`
    con.query(queryDb, function(err, result, fields) {
        if (err) throw err;
    });
    let queryTbMenu = `CREATE TABLE IF NOT EXISTS ${'`db_restaurant`'}.tb_menu (
        id_menu int NOT NULL AUTO_INCREMENT,
        nama varchar(255) NOT NULL,
        harga int NOT NULL,
        kategori enum ('makanan ringan', 'makanan berat', 'minuman') NOT NULL,
        stok int NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP,
        deleted_at TIMESTAMP,
        PRIMARY KEY(id_menu)
    )`
    con.query(queryTbMenu, function(err, result, fields) {
        if (err) throw err;
    });
    console.log("Database connected!");
})

module.exports = con;