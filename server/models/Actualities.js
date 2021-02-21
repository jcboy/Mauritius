const mongoose = require('mongoose');

const ActualitySchema = new mongoose.Schema({
    title : String,
    subtitle : String,
    date : String,
    description : String,
    shortDescription: String,
    mainImage: String,
    secondaryImages: [String]
}, {
    timestamps : true
})

module.exports = mongoose.model('Actuality', ActualitySchema);

