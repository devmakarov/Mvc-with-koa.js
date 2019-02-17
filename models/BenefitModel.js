const mongoose = require('../libs/database')

const Benefit = new mongoose.Schema({
    
    title: {
        type: String, 
        required: true
    }, 
    description: {
        type: String,
        required: true
    }
}, {
    collection: 'Benefits'
})

module.exports = mongoose.model( 'Benefit', Benefit )