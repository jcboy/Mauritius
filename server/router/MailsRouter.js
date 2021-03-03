const {Router} = require('express');
const {check} = require('express-validator');
const MailsController = require('../http/Controllers/MailsController');
const {index, store, remove} = MailsController;
const PrivateRoute = require("../http/PrivateRoute");

const router = Router();
const prefix = '/mails'

router.get('/', PrivateRoute, index);

router.post(
    '/store',
    [
        check('prenom', 'Le prenom est obligatoire').not().isEmpty(),
        check('nom', 'Le nom est obligatoire').not().isEmpty(),
        check('mail', 'Le mail est obligatoire').isEmail(),
        check('object', 'L \'objet est obligatoire').not().isEmpty(),
        check('message', 'Un message est obligatoire').not().isEmpty()
    ],
    store);

router.delete('/:id', PrivateRoute, remove);


module.exports = {router, prefix};


