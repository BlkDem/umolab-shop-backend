const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "iotman",
});

conn.connect();

module.exports = conn;