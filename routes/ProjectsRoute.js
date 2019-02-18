const Router = require('koa-router')
const router = new Router({
    prefix: '/projects'
})

const ProjectsController = require('../controllers/ProjectsController')

router
    .get('/', ProjectsController.all )
    .post('/create', ProjectsController.create )
    .get('/:id', ProjectsController.checkId, ProjectsController.fetchOne )
    .post('/update/:id', ProjectsController.checkId, ProjectsController.update )
    .post('/remove/:id', ProjectsController.checkId, ProjectsController.remove )

module.exports = router