const Actuality = require ('../../models/Actualities');


class ActualitiesController{
    index(req, res){
        const query = Actuality.find(); // recuperation de donnée
        query.select('title date description'); // séléction des attributs a recuperé
        query.exec((err, actualities) => {
            res.send(actualities)                     // execution de la query que l ont a construit dans la premiere etape
        })
    }
    store(req, res){
        const actuality = new Actuality(req.body); // assigné un model a la requete du body
        actuality.save().then(() => {
            res.status(201).send({message : 'actuality sauvegarder correctement'})
        }).catch(() => {
            res.status(400).send({message: 'une erreur est survenu'})
        })
    }
    read(req, res){
        res.send("Read");
    }
    update(req, res){
        res.send("Update");
    }
    delete(req, res){
        res.send("Delete");
    }
}

module.exports = new ActualitiesController();
