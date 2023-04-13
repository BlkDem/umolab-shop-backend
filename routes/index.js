const express = require("express");
// const controllers = requir../controllers/devicesers");
const deviceTypesController = require("../controllers/device_types");
const devicesController = require("../controllers/devices");
const router = express.Router();

const apiPreffix = '/api/v1';

router.route(`${apiPreffix}/devices`).get(devicesController.getDevices);
router.route(`${apiPreffix}/devices/:id`).get(devicesController.getDevice)
router.route(`${apiPreffix}/device_types`).get(deviceTypesController.getDeviceTypes);
router.route(`${apiPreffix}/device_types/:id`).get(deviceTypesController.getDeviceType)
//  .put(controllers.updateTodo)
//  .delete(controllers.deleteTodo);
module.exports = router;