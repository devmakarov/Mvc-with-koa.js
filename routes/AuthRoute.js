const Router = require('koa-router')

const UserModel = require('../models/UserModel') 
const router = new Router({
    prefix: '/auth'
})

router
    .post('/login', async ctx => {
        const { email, password } = ctx.request.body
        const user = await UserModel.findOne( { email } )
        const isValidPassword = await user.checkPassword( password )
        ctx.body = isValidPassword
    })
    
module.exports = router