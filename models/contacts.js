const mongoose = require('mongoose1');

const contactSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    } ,
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const Contact = module.exports = mongoose.model('Contact', contactSchema);