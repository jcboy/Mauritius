const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    index : Number,
    title : String,
    date : String,
    description : String,
    pageNumber : String,
})

module.exports = mongoose.model('Activity', ActivitySchema);

