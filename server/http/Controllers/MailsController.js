const {validationResult} = require('express-validator');
const Mails = require('../../models/Mails');

class MailsController {

    index(req, res) {
        Mails.find().exec((err, mails) => { // Exécution du query
            res.send(mails)
        }); // Recupération du schéma via Mongoose

    }

    store(request, response) {

        const mail = new Mails(request.body); //Assigner un modèle à la requete du body

        mail.save().then(() => {
            response.status(201).send({msg: `new mail has been added`})
        }).catch(() => {

            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).send({errors: errors.mapped()});
            }
        })
    }

      show(request, response) {

        Mails.findById(request.body.mail._id).exec((err, mail) => { // Exécution du query
             const {_id} = request.body.mail;
             console.log(_id);
             console.log(mail);
             response.send(mail);
        });


    }

    /*   delete (req, res) {
           const id = req.params.id;
           Mails.findByIdAndDelete(id, {}, (err, Mails)=>{
               if (!!err) {
                   return res.status(404).send({message: 'Mail not found'})
               }

               return res.status(201).send({message: 'Mail deleted', Mails});
           })
       }
   */
}

module.exports = new MailsController();

