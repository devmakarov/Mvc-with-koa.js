const Router = require('koa-router')
const passport = require('../libs/passport/index')
const router = new Router({
    prefix: '/auth'
})

router
    .post('/login', passport.authenticate('local', {
        successRedirect: 'http://rtmp.odessa.ua/admin/main#go',
        failureRedirect: 'http://rtmp.odessa.ua/login'
    }))

module.exports = router