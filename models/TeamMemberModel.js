const mongoose = require('../libs/database')

const TeamMember = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    position: {
        type: String, 
        required:true
    },
    image: {
        type: String,
        required: true
    }
}, {
    collection: 'TeamMembers'
})

module.exports = mongoose.model('TeamMember', TeamMember )