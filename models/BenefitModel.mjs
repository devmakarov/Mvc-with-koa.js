import mongoose from '../libs/database.mjs'

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

export default mongoose.model( 'Benefit', Benefit )