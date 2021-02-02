const Activity = require('../../models/Activities');

class ActivitiesController {
    index(req, res) {
        const query = Activity.find();
        if (!!req.body) {
            if (!!req.body.title) {
                query.where('title').equals(req.body.title);
            }
            if (!!req.body.date) {
                query.where('date').equals(req.body.date);
            }
        }
        query.exec((err, response) => {
            if (!!err) {
                console.log('An error has occurred : ', err.message);
                res.status(404).send(err);
            }
            res.send(response);
        });
    }

    create(req, res) {
        const newActivity = new Activity(req.body);
        newActivity.save().then((response) => {
            res.send({
                message : 'Activité ajoutée à la base de donnée...',
                response
            });
        }).catch((err) => {
            console.log('An error has occurred : ', err.message);
            res.status(501).send({message: 'Les informations reçues sont incomplètes...'});
        });
    }

    update(req, res) {
        const params = req.body;
        Activity.findOneAndUpdate(params, {title: 'AAA'},
            {new: true}, (err, response) => {
                console.log(response);
                if (!!err) {
                    res.status(404).send(err);
                }
                res.send({
                    message : 'Activité correctement actualisée',
                    response
                });
            });
    }

    remove(req, res) {
        const id = req.params.id;
        Activity.findByIdAndDelete(id, (err, response) => {
            if (!!err) {
                res.status(404).send(err);
            }
            res.send({
                message : 'Activité correctement supprimée !',
                response
            });
        });
    }
}

module.exports = new ActivitiesController();
