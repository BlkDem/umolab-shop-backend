const AppError = require("../../utils/appError");
const Device = require("../../models/device");

exports.getDevices = (req, res, next) => {

    Device.devices(function (err, result) { 

        if (err) return next(new AppError(err))
        res.status(200).json({
            status: "success",
            length: result?.length,
            data: result,
        });

    });


};

exports.getDevice = (req, res, next) => {

    const deviceId = req.params.id;

    if (!deviceId) {
        return next(new AppError("No device id found", 404));
    }
    
    Device.device(deviceId, function (err, result) { 

        if (err) return next(new AppError(err))
        res.status(200).json({
            status: "success",
            length: result?.length,
            data: result,
        });

    });
}
