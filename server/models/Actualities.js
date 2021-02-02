const mongoose = require('mongoose');

const ActualitySchema = new mongoose.Schema({
    index : Number,
    title : String,
    date : String,
    description : String,
    pageNumber : String,
    tags : [
        Categories
    ]
}, {
    timestamps : true
})

module.exports = mongoose.model('Actuality', ActualitySchema);

