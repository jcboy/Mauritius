const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: false
    },
    secondaryImages: {
        type: [String],
        required: false
    },
    tags: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
}, {
    timestamps: true
})
