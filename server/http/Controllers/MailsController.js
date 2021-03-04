const Mails = require('../../models/Mails');

class MailsController {

    index(req, res) {
        Mails.find((err, response) => {
            res.send(response)
        });
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
        const id = req.params.id;
        Mails.findByIdAndDelete(id, {}, (err, Mails) => {
            if (!!err) {
                return res.status(404).send({message: 'Mail not found'})
            }

            return res.status(201).send({message: 'Mail deleted', Mails});
        })
    }

}

module.exports = new MailsController();

