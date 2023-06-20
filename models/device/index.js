const connection = require("../../services/db");


module.exports.devices = function (callback) {

    connection.query('SELECT * FROM devices order by device_name', function (err, data) {
        callback(err, data);
    });

};

module.exports.device = function (id, callback) {

    connection.query('SELECT * FROM devices where id = ? order by device_name', [id], function (err, data) {
        callback(err, data);
    });

};
