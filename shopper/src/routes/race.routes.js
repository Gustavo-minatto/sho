const { Router } = require('express');
const RideController = require('../controllers/RideController');

const rideRoutes = Router();
rideRoutes.post('/', RideController.create);


module.exports = rideRoutes;
