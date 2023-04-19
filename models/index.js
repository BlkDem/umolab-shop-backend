const connection = require("../services/db");

module.exports.customQuery = function (query, callback) {

    connection.query(query, function (err, data) {
        callback(err, data);
    });

};
