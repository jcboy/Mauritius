const {activity} = require ('../../models/Actualities');

const perPage = 6;

class ActivitiesController {

    index(req, res) {

        const query = activity.find();

        if (!!req.query.tag) {
            query.where("tags").equals(req.query.tag);
        }

        query.exec((err, response) => {
            if (!!err) {
                res.status(500).send(err.message)
            } else {
                let payload = {};
                const count = response.length;
                if (!!req.query.page) {
                    const pageNumber = Number(req.query.page);
                    const firstIndexOfCurrentPage = (pageNumber - 1) * perPage;
                    payload.currentPage = req.query.page;
                    response = response.splice(firstIndexOfCurrentPage, perPage);
                    payload.response = response;
                    payload.displayed = response.length;
                    payload.total = count;
                    payload.pageMax = Math.ceil(count / perPage);
                } else {
                    payload = response;

                }
                res.send(payload);
            }
        })
    }

    getOne(req, res) {
        activity.find({_id: req.params.id}, (err, data) => {
            if (err) return res.statusCode(500).send({message: 'SERVER_ERROR'})
            console.log(data)
            console.log(req.params.id)
            res.send(data);
        })
    }

    create(req, res) {
        const newActivity = new activity(req.body);
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
        activity.findOneAndUpdate(params, {title: 'AAA'},
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
        activity.findByIdAndDelete(id, (err, response) => {
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
