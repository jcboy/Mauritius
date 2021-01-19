const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mauritiusDb', {useNewUrlParser: true})
    .then( () => {
        console.log('connexion Ok')
    } )
    .catch( (err) => {
        console.log('Quel horreur', err)
    } )