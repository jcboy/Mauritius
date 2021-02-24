const express = require('express');
const server = express();
const cors = require('cors');

const HomeRouter = require("./router/HomeRouter");
const CategoriesRouter = require('./router/CategoriesRouter');
const ActivitiesRouter = require("./router/ActivitiesRouter");
const ActualitiesRouter = require("./router/ActualitiesRouter");
const AdminRouter = require("./router/AdminRouter");
const MailsRouter  = require('./router/MailsRouter');

const PORT = 8080;

server.use(express.json());
server.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))

server.use(HomeRouter.prefix, HomeRouter.router);
server.use(ActivitiesRouter.prefix, ActivitiesRouter.router);
server.use(ActualitiesRouter.prefix, ActualitiesRouter.router);
server.use(CategoriesRouter.prefix, CategoriesRouter.router );
server.use(MailsRouter.prefix, MailsRouter.router);
server.use(AdminRouter.prefix, AdminRouter.router);


server.listen(8080, "localhost", function () {
    console.log("Server now running on port : " + PORT);
})
