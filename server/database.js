const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mauritius-db', {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

const bd = mongoose.connection;

bd.once('open', function (){
    console.log('Connection has been made...');
}).on('error', function (err){
    console.log('An error has occurred : ', err.message);
})

