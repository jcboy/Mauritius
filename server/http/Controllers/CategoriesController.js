const {validationResult} = require('express-validator');
const Category = require('../../models/Categories');

class CategoriesController {

    index(req, res) {
        const query = Category.find();  // 1. On récupère : https://mongoosejs.com/docs/queries.html
        query.select('tagName').sort({tagName: 1});   // 2. On selectionne les attributs à récupèrer

        query.exec((err, categories) => {  // 3. On execute la query que j'ai construit
            res.send(categories)
        });
    }

    store(req, res) {
        const category = new Category(req.body); // asigne un modèle à la req du body
        category.save().then(() => {
            res.status(201).send({msg: `new category has been added`})
        }).catch(() => {
            // res.status(500).send({message: 'Error' })
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({errors: errors.mapped()});
            }
        })
    }

    delete(req, res) {
        const id = req.params.id;
        Category.findByIdAndDelete(id, (err, category) => {
            if (!!err) {
                return res.status(404).send({message: 'Category not found'})
            }
            return res.status(201).send({message: 'Category deleted', category});
        })
    }

}

module.exports = new CategoriesController();

