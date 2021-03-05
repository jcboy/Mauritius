const { Router } = require('express');
const { check } = require('express-validator');
const CategoriesController = require('../http/Controllers/CategoriesController');
const {index, store, delete:remove } = CategoriesController;
const PrivateRoute = require("../http/PrivateRoute");

const router = Router();

const prefix = '/categories';

router.get('/', index);

router.post(
    '/store',
    [
        check('name', 'Le nom est obligatoire').not().isEmpty(),
    ], PrivateRoute,
    store );

router.delete('/:id', PrivateRoute, remove);

/* // Exemple de route pour enregistrer un utilisateur et valider nom email pwd
router.post(
    '/new',
    [ // middlewares
        check('name', 'Le nombre est obligatoire').not().isEmpty(),
        check('email', 'Le email est obligatoire').isEmail(),
        check('password', 'Credentials d\'au moins 6 caractères').isLength({ min: 6 })
    ],
    createUser // ou store // ou create // comme vous voulez
);
*/


module.exports = { router, prefix };