const express = require('express');
const server = express();
const cors = require('cors');
require('./database');
const HomeRouter = require("./router/HomeRouter");

const PORT = 8080;

server.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))

server.use(express.json());

server.use(HomeRouter.prefix, HomeRouter.router);
server.use(ActivitiesRouter.prefix, ActivitiesRouter.router);

server.listen(8080, "localhost", function () {
    console.log("Server now running on port : " + PORT);
})
