//pake http dan express karna menjadikan express sbg middlewarenya
const http = require("http"); //import http

require("dotenv").config();
const app = require("./app"); //import app.js

const { mongoConnect } = require("./services/mongo"); //import dari mongo.js
const { loadPlanetsData } = require("./models/planets.model"); //import function loadPlanetsData
const { loadLaunchData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000; //untuk mengetahui environtmen pengakses

//default powershell windows harus pake ini
//kalo ga work, di package.json startnya = "start": "set PORT=5000&& node src/server.js"
const server = http.createServer(app); //membuat server

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
}

startServer();
