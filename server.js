const Koa = require('koa')

const app = new Koa
 
require('./middlewares/logger').init( app )
require('./middlewares/static').init( app )
require('./middlewares/passport').init( app )
require('./middlewares/parser').init( app )
require('./routes').init( app )


 
module.exports = app