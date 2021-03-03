const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection has been made...');
}).catch((err) => {
    console.log('An error has occurred : ', err.message);
})

