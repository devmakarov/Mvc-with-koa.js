const passport = require('koa-passport')

exports.init = app => {
    app.use(passport.initialize())
    app.use( passport.session() )  
}