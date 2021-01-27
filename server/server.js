const express = require('express');
const server = express();
const cors = require('cors');

const HomeRouter = require("./router/HomeRouter");
const CategoriesRouter = require('./router/CategoriesRouter');
const ActualitiesRouter = require('./router/ActualitiesRouter');

const PORT = 8080;

server.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))

server.use(express.json());
server.use(HomeRouter.prefix, HomeRouter.router);
server.use(CategoriesRouter.prefix, CategoriesRouter.router );
server.use(ActualitiesRouter.prefix, ActualitiesRouter.router );


server.listen(8080, "localhost", function () {
    console.log("Server now running on port : " + PORT);
})
