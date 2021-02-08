const mongoose = require('mongoose');

const ActualitiesSchema = mongoose.schema({
    id : Number,
    title : String,
    subtitle : String,
    description : String,
    shortDescription : String,
    filters : String
})

const Actualities = mongoose.model('Actualities', ActualitiesSchema);

module.exports = Actualities;
