const { getAllPlanets } = require("../../models/planets.model"); //import module planets.model

//dapetin isi planetnya
async function httpGetAllPlanets(req, res) {
  return res.status(200).json(await getAllPlanets());
}

//export functionnya
module.exports = {
  httpGetAllPlanets,
};
