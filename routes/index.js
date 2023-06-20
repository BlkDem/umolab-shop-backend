const express = require("express");
const deviceTypesController = require("../controllers/device_types");
const devicesController = require("../controllers/devices");
const router = express.Router();

const apiPreffix = '/api/v1';

router.route(`${apiPreffix}/devices`).get(devicesController.getDevices);
router.route(`${apiPreffix}/device/:id`).get(devicesController.getDevice)
router.route(`${apiPreffix}/device_types`).get(deviceTypesController.getDeviceTypes);
router.route(`${apiPreffix}/device_type/:id`).get(deviceTypesController.getDeviceType)
module.exports = router;
