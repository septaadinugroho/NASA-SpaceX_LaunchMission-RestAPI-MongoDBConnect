const express = require("express"); //import express
const { httpGetAllPlanets } = require("./planets.controller"); //import function dari controller

const planetsRouter = express.Router(); //inisialisasi router express

planetsRouter.get("/", httpGetAllPlanets); //method get dengan path /planets, kemudian jalankan function getAllPlanets

//export planetsRouternya
module.exports = planetsRouter;
