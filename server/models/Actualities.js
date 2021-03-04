const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    },
    mainImage: {
        type: String,
        required: false
    },
    secondaryImages: {
        type: [String],
        required: false
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    tags: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
}, {
    timestamps: true
})


module.exports.actuality = mongoose.model('Actuality', ArticleSchema);
module.exports.activity = mongoose.model('Activity', ArticleSchema);

