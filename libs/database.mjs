import mongoose from 'mongoose'
import config from 'config'


;( async function () {
    
    try {
        await mongoose.connect(config.get( 'db' ), { useNewUrlParser: true } )
        console.log('Connected')
    } catch ( err ) {
        console.log( err)
    } 
    
})()

export default mongoose