import Router from 'koa-router'
const router = new Router({
    prefix: '/team'
})

import TeamController from '../controllers/TeamController.mjs'

router
    .get('/', TeamController.index)
    .post('/create', TeamController.create)
    .get('/:id', TeamController.checkId, TeamController.fetchOne)
    .put('/:id', TeamController.checkId, TeamController.update)
    .delete('/:id', TeamController.checkId, TeamController.remove)

export default router