const express = require('express');
const cors = require('cors');


const server = express();
const PORT = 8080;

// Middleware fn qui s'exécute à chaque fois que quelqu'un fait une requête au serveur express (avant d'accéder aux routes)
server.use( express.json() ); // le middleware s'appelle express.json, il transforme les requêtes et recuper les propriétés dans le body
server.use(express.static('public'))


server.use(cors ({
    origin: '*',  //   http://localhost:4200  // en dev '*'  // http://localhost:3000
    optionsSuccessStatus: 200
}));

server.get('/', (req, res) => {
    let salida = {
        id: 33,
        name: 'hhhd'
    };
    res.send(salida);
})

server.post('/activities',(req, res)=>{
    let body = req.body;

    res.json({
        body
    });

})

server.listen(PORT, '127.0.0.1', ()=>{
    console.log('server running quoi');
})