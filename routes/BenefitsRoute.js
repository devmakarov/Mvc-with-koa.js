const Router = require('koa-router')
const router = new Router({
    prefix: '/benefits'
})

const BenefitController = require('../controllers/BenefitController')

router
    .get('/', BenefitController.index )
    .post('/create', BenefitController.create )
    .get('/:id', BenefitController.checkId, BenefitController.fetchOne )
    .post('/update/:id', BenefitController.checkId, BenefitController.update )
    .post('/remove/:id', BenefitController.checkId, BenefitController.remove )

module.exports = router