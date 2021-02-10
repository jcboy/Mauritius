const mongoose = require('mongoose');

const ActualitySchema = new mongoose.Schema({
    index : Number,
    title : String,
    subtitle : String,
    date : String,
    description : String,
    shortDescription: String,
    pageNumber : String,
    filters : []
}, {
    timestamps : true
})

module.exports = mongoose.model('Actuality', ActualitySchema);

