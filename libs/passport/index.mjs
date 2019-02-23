import passport from 'koa-passport'
import User from '../../models/UserModel.mjs'
import localStrategy from './LocalStrategy'

passport.serializeUser( (user, done) => {
    done( null, user.id )
});

passport.deserializeUser( ( id, done ) => {
    User.findById( id, done )
})

passport.use(localStrategy)

export default passport
