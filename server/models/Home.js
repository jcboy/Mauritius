const mongoose = require('mongoose');

const HomeSchema = mongoose.schema({
    id: {
        type : Number,
        require: true,
    },
    title: {
        type: String,
        required: true,
    },
    subTitle: String,
    presentation: String,
})

module.exports = HomeSchema;