const express = require("express");

const planetsRouter = require("./planets/planets.router"); //import router planet
const launchesRouter = require("./launches/launches.router"); //import router launch

const api = express.Router();

api.use("/planets", planetsRouter); //menjalankan function router
api.use("/launches", launchesRouter);

module.exports = api;
