const Router = require('koa-router')
const router = new Router({
    prefix: '/team'
})

const TeamController = require('../controllers/TeamController')

router
    .get('/', TeamController.index)
    .post('/create', TeamController.create)
    .get('/:id', TeamController.checkId, TeamController.fetchOne)
    .post('/update/:id', TeamController.checkId, TeamController.update)
    .post('/remove/:id', TeamController.checkId, TeamController.remove)

module.exports = router