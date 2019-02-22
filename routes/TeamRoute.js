const Router = require('koa-router')
const router = new Router({
    prefix: '/team'
})

const TeamController = require('../controllers/TeamController')

router
    .get('/', TeamController.index)
    .post('/create', TeamController.create)
    .get('/:id', TeamController.checkId, TeamController.fetchOne)
    .put('/:id', TeamController.checkId, TeamController.update)
    .delete('/:id', TeamController.checkId, TeamController.remove)

module.exports = router