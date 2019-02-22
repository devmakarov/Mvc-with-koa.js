const publcic = require('koa-static')

exports.init = app => app.use(publcic('public'))