const { Router } = require("express");
const DriverController = require("../controllers/DriverController");

const driversRoutes = Router();

driversRoutes.post("/", DriverController.create);
driversRoutes.get("/", DriverController.index);

module.exports = driversRoutes;
