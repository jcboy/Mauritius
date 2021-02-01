const express = require('express');
const server = express();
const cors = require('cors');
require('./database');

const HomeRouter = require("./router/HomeRouter");
const CategoriesRouter = require('./router/CategoriesRouter');
const ActivitiesRouter = require("./router/ActivitiesRouter");

const PORT = 8080;

server.use(express.json());
server.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))

server.use(express.json());
server.use(HomeRouter.prefix, HomeRouter.router);
server.use(ActivitiesRouter.prefix, ActivitiesRouter.router);
server.use(CategoriesRouter.prefix, CategoriesRouter.router );


server.listen(8080, "localhost", function () {
    console.log("Server now running on port : " + PORT);
})
