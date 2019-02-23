import mongoose from '../libs/database.mjs'

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

export default mongoose.model( 'Contact', Contact )