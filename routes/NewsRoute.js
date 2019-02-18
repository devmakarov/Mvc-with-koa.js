const Router = require('koa-router')
const router = new Router({
    prefix: '/news'
})

const NewsController = require('../controllers/NewsController')

router
    .get('/', NewsController.all )
    .post('/create', NewsController.create )
    .get('/:id', NewsController.checkId, NewsController.fetchOne )
    .post('/update/:id', NewsController.checkId, NewsController.update )
    .post('/remove/:id', NewsController.checkId, NewsController.remove )

module.exports = router