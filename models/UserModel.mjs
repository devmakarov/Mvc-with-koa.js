import mongoose from '../libs/database.mjs'
import crypto from 'crypto'

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    salt: {
        required: true,
        type: String
    }
}, {
    collection: 'Users'
})

function generatePassword( salt, password ) {
    return new Promise(( resolve, reject ) => {
        crypto.pbkdf2(
            password, salt,
            10, 120,
            'sha512',
            ( err, key ) => {
                if ( err ) return reject( err )
                resolve( key.toString( 'hex' ) )
            }
        );
    });
}
 

User.methods.setPassword = async function setPassword( password ) {
    if ( password !== undefined ) {
        if ( password.length < 4 ) {
            throw new Error('Пароль должен быть минимум 4 символа.')
        }
    }

    this.salt = await crypto.randomBytes( 128 ).toString( 'hex' )
    console.log( 'Salt: '+ this.salt );
    
    this.passwordHash = await generatePassword( this.salt, password )
    console.log( 'Hash: ' + this.passwordHash );
};

User.methods.checkPassword = async function checkPassword( password ) {
    if ( !password ) return false

    const hash = await generatePassword( this.salt, password )
    return hash === this.passwordHash
}

 
export default mongoose.model('User', User)