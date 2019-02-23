import logger from 'koa-logger'

const init = app => app.use( logger() )

export default { init }