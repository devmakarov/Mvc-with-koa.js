import mongoose from '../libs/database.mjs'

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

export default mongoose.model('TeamMember', TeamMember )