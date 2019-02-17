const mongoose = require('../libs/database')

const Sertification = new mongoose.Schema({
    image: {
        type: String, 
        required: true
    }
}, {
        collection: 'Sertifications'
})

module.exports = mongoose.model( 'Sertification', Sertification )