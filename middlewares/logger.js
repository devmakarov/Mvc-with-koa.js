const logger = require('koa-logger')

exports.init = app => app.use( logger() )