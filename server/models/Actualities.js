const { Schema, model } = require('mongoose');

const ActualitySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: Date,
});

module.exports = model('Actuality', ActualitySchema);
