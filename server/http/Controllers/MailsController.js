const Mails = require('../../models/Mails');

class MailsController {

    index(req, res) {
        Mails.find((err, response) => {
            res.send(response)
        });
    }

    getMail(req,res) {
        console.log(req.params.id)
        Mails.find({_id: req.params.id}, (err, response) => {
            if (!!err) {
                return res.status(404).send(err)
            }
            res.send(response);
        })
    }

    store(request, response) {
        const mail = new Mails(request.body);
        mail.save()
            .then(() => {
                response.status(201).send({msg: `new mail has been added`})
            }).catch((err) => {
            response.status(400).send(err.message);
        })
    }

    remove(req, res) {
        Mails.findOneAndDelete({_id : req.params.id}, {}, (err, response) => {
            if (!!err) {
                return res.status(404).send(err.message)
            }
            res.send({_id : req.params.id});
        })
    }

}

module.exports = new MailsController();

