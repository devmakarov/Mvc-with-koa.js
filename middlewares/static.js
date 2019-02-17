const static = require('koa-static')

exports.init = app => app.use(static('public'))