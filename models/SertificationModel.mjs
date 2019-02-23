import mongoose from '../libs/database.mjs'

const Sertification = new mongoose.Schema({
    image: {
        type: String, 
        required: true
    }
}, {
        collection: 'Sertifications'
})

export default mongoose.model( 'Sertification', Sertification )