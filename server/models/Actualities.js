const mongoose = require('mongoose');

const ActualitiesSchema = mongoose.schema({
    id : Number,
    title : String,
    date : String,
    description : String,
    pageNumber : String,
})

const Actualities = mongoose.model('Actualities', ActualitiesSchema);

module.exports = Actualities;
