const express = require('express');
const dotenv = require("dotenv");
dotenv.config();

const server = express();
const cors = require('cors');

const CategoriesRouter = require('./router/CategoriesRouter');
const ActivitiesRouter = require("./router/ActivitiesRouter");
const ActualitiesRouter = require("./router/ArticleRouter");
const AdminRouter = require("./router/LoginRouter");
const MailsRouter = require('./router/MailsRouter');

server.use(express.json());
server.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))

server.use(ActivitiesRouter.prefix, ActivitiesRouter.router);
server.use(ActualitiesRouter.prefix, ActualitiesRouter.router);
server.use(CategoriesRouter.prefix, CategoriesRouter.router);
server.use(MailsRouter.prefix, MailsRouter.router);
server.use(AdminRouter.prefix, AdminRouter.router);


server.listen(process.env.PORT, () => {
    console.log("Server now running on port : " + process.env.PORT);
})
