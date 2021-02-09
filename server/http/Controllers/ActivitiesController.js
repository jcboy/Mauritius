const Activity = require('../../models/Activities');

const perPage = 6;

class ActivitiesController {

    index(req, res) {
        if (!req.query.page) {
            res.status(404).send({message: 'Numéro de page introuvable...'})
        }
        const pageNumber = Number(req.query.page);
        const query = Activity.find();
        if (!!req.query.tag) {
            query.where("tags").equals(req.query.tag);
        }

        query.exec((err, response) => {
            if (!!err) {
                res.status(500).send(err.message)
            } else {
                const count = response.length;
                const firstIndexOfCurrentPage = (pageNumber - 1) * perPage;
                response = response.splice(firstIndexOfCurrentPage, perPage);
                const payload = {
                    currentPage : req.query.page,
                    pageMax : Math.ceil(count/perPage),
                    count,
                    response,
                }
                res.send(payload);
            }
        })

    }


    create(req, res) {
        const newActivity = new Activity(req.body);
        newActivity.save().then((response) => {
            res.send({
                message: 'Activité ajoutée à la base de donnée...',
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
                    message: 'Activité correctement actualisée',
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
                message: 'Activité correctement supprimée !',
                response
            });
        });
    }
}

module.exports = new ActivitiesController();
