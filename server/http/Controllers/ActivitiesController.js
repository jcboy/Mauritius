const Activity = require('../../models/Activities');

const perPage = 6;

class ActivitiesController {
    index(req, res) {

        // req.query.page OBLIGATOIRE
        const pageNumber = Number(req.query.page);
        const firstIndex = (pageNumber - 1) * perPage;

        const query = Activity.find();

        query.where('tags').equals(req.query.tag);

        query.limit(perPage);
        query.skip(firstIndex);


        query.exec((err, response) => {
            console.log(response);
            res.send({totalActivities: response.length, response});
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
