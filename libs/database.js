const mongoose = require('mongoose')
const config = require('config');


;( async function () {
    
    try {
        await mongoose.connect(config.get( 'db' ), { useNewUrlParser: true } )
        console.log('Connected');
    } catch ( err ) {
        console.log( err); 
    } 
    
})()

module.exports = mongoose;