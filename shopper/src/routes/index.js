const { Router } = require("express");

const usersRoutes = require("./users.routes");
const sessionsRouter = require("./sessions.routes");
const driversRouter = require("./driver.routes");
const raceRouter = require("./race.routes");
const googleRouter = require("./google.Routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRouter);
routes.use("/driver", driversRouter);
routes.use("/rides", raceRouter);
routes.use("/google", googleRouter)

module.exports = routes;
