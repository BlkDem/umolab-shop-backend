const connection = require("../../services/db");

module.exports.deviceTypes = function (callback) {

    connection.query('SELECT * FROM device_types order by device_type_name', function (err, data) {
        callback(err, data);
    });

};

module.exports.deviceType = function (id, callback) {

    connection.query('SELECT * FROM device_types where id = ?', [id], function (err, data) {
        //here we return the results of the query
        callback(err, data);
    });

};
