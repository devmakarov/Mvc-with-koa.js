const combineRoutes = require('koa-combine-routers')

const router = combineRoutes(
    require('./ContactsRoute'), 
    require('./SertificationRoute'),
    require('./BenefitsRoute'),
    require('./TeamRoute'),
    require('./NewsRoute'),
    require('./ProjectsRoute'),
    require('./AuthRoute')
)

exports.init = app => app.use( router() )