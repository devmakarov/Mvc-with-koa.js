const mongoose = require('../libs/database')

const Resources = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }, 
    image: {
        type: String, 
        required: true
    }, 
    type: {
        type: Number,
        required: true
    }
}, {
        collection: 'Resources'
})

module.exports = mongoose.model('Resources', Resources )