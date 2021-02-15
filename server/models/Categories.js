// le modèle categories est une représentation visuelle d'un registre dans la db
// ce modèle sert à crée des nouvelles instances ex: const category = new Category ({name: string})
// savegarder la nouvelle instance dans la bd ex : category.save()


const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = model('Category', CategorySchema);  // le modèle s'appelera  Category et aura comme schema à CategorySchema