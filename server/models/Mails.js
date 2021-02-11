

const { Schema, model } = require('mongoose');

const MailsSchema = new Schema({
    prenom: {
        type: String,
        required: true,
        lowercase: true
    },
     nom: {
        type: String,
        required: true,
        lowercase: true
    },
    mail: {
        type: String,
        required: true,
        lowercase: true
    },
    object: {
        type: String,
        required: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true,
        lowercase: true
    },
    pieceJointe: {
        type: String,
        required: false,
        lowercase: true
    },

});

module.exports = model('Mails', MailsSchema);
