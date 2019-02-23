import Koa from 'koa'

// Middlewares
import access from './middlewares/access.mjs'
import logger from './middlewares/logger.mjs'
import assets from './middlewares/static.mjs'
import passport from './middlewares/passport.mjs'
import parser from './middlewares/parser.mjs'
import routes from './routes/index.mjs'
 
const app = new Koa
const requirements = [ access, logger, assets, passport, parser, routes ]
 
requirements.forEach( el => {
    el.init( app );
})

export default app