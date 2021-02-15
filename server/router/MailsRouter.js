/*
 Routes of / Categories
 host + /prefix
*/

const { Router } = require('express');
const { check } = require('express-validator');
const MailsController = require('../http/Controllers/MailsController');
const {index, store, delete:remove } = MailsController;

const router = Router();
const prefix = '/mails'

router.get('/', index);

router.post(
    '/store',
    [
        check('prenom', 'Le prenom est obligatoire').not().isEmpty(),
        check('nom', 'Le nom est obligatoire').not().isEmpty(),
        check('mail', 'Le mail est obligatoire').isEmail(),
        check('object', 'L \'objet est obligatoire').not().isEmpty(),
        check('message', 'Un message est obligatoire').not().isEmpty(),
        check('pieceJointe', ),
    ],
    store);


/*

router.delete('/:id', remove);

*/

module.exports = { router, prefix };


