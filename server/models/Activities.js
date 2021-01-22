const mongoose = require('mongoose');

const ActivitySchema = mongoose.schema({
    id : Number,
    title : String,
    date : String,
    description : String,
    pageNumber : String,
})

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;