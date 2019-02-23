import combineRoutes from 'koa-combine-routers'

import BenefitsRoute from './BenefitsRoute.mjs'
import ContactsRoute from './ContactsRoute.mjs'
import SertificationRoute from './SertificationRoute.mjs'
import TeamRoute from './TeamRoute.mjs'
import NewsRoute from './NewsRoute.mjs'
import ProjectsRoute from './ProjectsRoute.mjs'
import AuthRoute from './AuthRoute.mjs'

const router = combineRoutes(
    BenefitsRoute, 
    ContactsRoute,
    SertificationRoute,
    TeamRoute,
    NewsRoute, 
    ProjectsRoute,
    AuthRoute
)


const init = app => app.use( router() )

export default { init }