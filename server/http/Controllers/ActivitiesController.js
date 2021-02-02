const Activity = require('../../models/Activities');

class ActivitiesController {
    index(req, res) {
        /*
        const query = Activity.find();
        if (!!req.body) {
            if (!!req.body.title) {
                query.where('title').equals(req.body.title)
            }
            if (!!req.body.date) {
                query.where('date').equals(req.body.date)
            }
        }
        query.exec((err, response) => {
            if (!!err) {
                console.log('An error has occurred : ', err.message);
                res.status(404).send(err)
            }
            res.send(response);
        })
         */
        Activity.find((err, response) => {
            if (!!err) {
                console.log(err);
            }
            res.send(response)
        })
    }

    create(req, res) {
        const newActivity = new Activity(req.body);
        newActivity.save().then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log('An error has occurred : ', err.message);
            res.status(501).send({message : 'Les informations reçues sont incomplètes...'})
        })
    }

    read(req, res) {
        res.send("Read");
    }

    update(req, res) {
        res.send("Update");
    }

    delete(req, res) {
        res.send("Delete");
    }
}

module.exports = new ActivitiesController();
