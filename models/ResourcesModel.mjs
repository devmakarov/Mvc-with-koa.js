import mongoose from '../libs/database.mjs'

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

export default mongoose.model('Resources', Resources )