const express = require('express');
const server = express();
const cors = require('cors');
const db = require('./database');

const HomeRouter = require("./Router/RouterHome/homeRouter");

const PORT = 8080;

// CORS CONFIG
server.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))
// Express JSON
server.use(express.json());

server.use(HomeRouter.prefix, HomeRouter.router);


server.get('/', (request, response) => {
    response.send()
})

// Ajout des routes

server.listen(8080, "localhost", function () {
    console.log("Server now running on port : " + PORT);
})
