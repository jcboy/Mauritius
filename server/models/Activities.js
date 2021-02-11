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
    scenery: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    },
    currentPage: {
        type : Number,
        required: true
    },
    tags: {
        type : String,
        required: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Activity', ActivitySchema);

