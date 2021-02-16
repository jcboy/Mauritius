const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: false
    },
    scenery: {
        type: String,
        required: false
    },
    currentPage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Activity', ActivitySchema);

