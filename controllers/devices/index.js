const AppError = require("../../utils/appError");
const conn = require("../../services/db");

exports.getDevices = (req, res, next) => {
    conn.query("SELECT * FROM devices order by device_name", function (err, data, fields) {
        if (err) return next(new AppError(err))
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
};

exports.getDevice = (req, res, next) => {
    if (!req.params.id) {
        return next(new AppError("No device id found", 404));
    }
    conn.query(
        "SELECT * FROM devices WHERE id = ?",
        [req.params.id],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(200).json({
                status: "success",
                length: data?.length,
                data: data,
            });
        }
    );
};