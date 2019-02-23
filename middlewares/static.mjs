import assets from 'koa-static'

const init = app => app.use( assets('public') )

export default { init }