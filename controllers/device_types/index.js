const AppError = require("../../utils/appError");
const DeviceType = require("../../models/device_type");

exports.getDeviceTypes = (req, res, next) => {

    DeviceType.deviceTypes(function (err, result) { 

        if (err) return next(new AppError(err))
        res.status(200).json({
            status: "success",
            length: result?.length,
            data: result,
        });

    });


};

exports.getDeviceType = (req, res, next) => {

    const deviceTypeId = req.params.id;

    if (!deviceTypeId) {
        return next(new AppError("No device id found", 404));
    }
    
    DeviceType.deviceType(deviceTypeId, function (err, result) { 

        if (err) return next(new AppError(err))
        res.status(200).json({
            status: "success",
            length: result?.length,
            data: result,
        });

    });
}
