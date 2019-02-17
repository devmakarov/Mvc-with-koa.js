const combineRoutes = require('koa-combine-routers')

const ContactsRoute = require('./ContactsRoute')
const SertificationRoute = require('./SertificationRoute')
const BenefitsRoute = require('./BenefitsRoute')
const TeamRoute = require('./TeamRoute')


const router = combineRoutes(
    ContactsRoute, 
    SertificationRoute,
    BenefitsRoute,
    TeamRoute
)

exports.init = app => app.use( router() )