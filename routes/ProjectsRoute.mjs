import Router from 'koa-router'
const router = new Router({
    prefix: '/projects'
})

import ProjectsController from '../controllers/ProjectsController.mjs'

router
    .get('/', ProjectsController.all )
    .post('/create', ProjectsController.create )
    .get('/:id', ProjectsController.checkId, ProjectsController.fetchOne )
    .put('/:id', ProjectsController.checkId, ProjectsController.update )
    .delete('/:id', ProjectsController.checkId, ProjectsController.remove )

export default router