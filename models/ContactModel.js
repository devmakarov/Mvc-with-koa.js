const mongoose = require('../libs/database')

const Contact = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String, 
        required: true
    }, 
    link: {
        type: String, 
    }
}, {
    collection: 'Contacts'
})

module.exports = mongoose.model( 'Contact', Contact )