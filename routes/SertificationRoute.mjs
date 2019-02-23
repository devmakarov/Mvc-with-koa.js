import Router from 'koa-router'
const router = new Router({
    prefix: '/sertification'
})

import SertificationController from '../controllers/SertificationController.mjs'

router
    .get('/', SertificationController.all )
    .post('/create', SertificationController.create )
    .get('/:id', SertificationController.checkId, SertificationController.fetchOne )
    .delete('/:id', SertificationController.checkId, SertificationController.remove )
    .put('/:id', SertificationController.checkId, SertificationController.update )

export default router