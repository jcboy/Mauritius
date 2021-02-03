const Activity = require('../../models/Activities');

class ActivitiesController {
    index(req, res) {
        const query = Activity.find();
        if (!!req.query) {
            if (!!req.query.title) {
                query.where('title').equals(req.query.title);
            }
            if (!!req.query.date) {
                query.where('date').equals(req.query.date);
            }
            if (!!req.query.currentPage) {
                query.where('currentPage').equals(req.query.currentPage);
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
