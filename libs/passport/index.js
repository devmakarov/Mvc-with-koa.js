const passport = require('koa-passport')
const User = require('../../models/UserModel')

const localStrategy = require('./LocalStrategy')

passport.serializeUser( (user, done) => {
    done( null, user.id )
});

passport.deserializeUser( ( id, done ) => {
    User.findById( id, done )
})

passport.use(localStrategy)

module.exports = passport
