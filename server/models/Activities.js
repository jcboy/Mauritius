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
    description: {
        type: String,
        required: true
    },
    tags: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Activity', ActivitySchema);

