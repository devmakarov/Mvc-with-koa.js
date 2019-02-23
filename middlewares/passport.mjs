import passport from 'koa-passport'

const init = app => {
    app.use( passport.initialize() )
    app.use( passport.session() )  
}

export default { init }