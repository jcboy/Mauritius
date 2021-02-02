const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    index: {
        type : Number,
        required: true
    },
    title: {
        type : String,
        required: true
    },
    date: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    },
    pageNumber: {
        type : String,
        required: false
    },
    tags: {
        type : String,
        required: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Activity', ActivitySchema);

