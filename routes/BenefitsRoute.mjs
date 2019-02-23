import Router from 'koa-router'
const router = new Router({
    prefix: '/benefits'
})

import BenefitController from '../controllers/BenefitController.mjs'

router
    .get('/', BenefitController.index )
    .post('/create', BenefitController.create )
    .get('/:id', BenefitController.checkId, BenefitController.fetchOne )
    .put('/:id', BenefitController.checkId, BenefitController.update )
    .delete('/:id', BenefitController.checkId, BenefitController.remove )

export default router
 