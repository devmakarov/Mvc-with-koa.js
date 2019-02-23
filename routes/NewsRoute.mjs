import Router from 'koa-router'
const router = new Router({
    prefix: '/news'
})

import NewsController from '../controllers/NewsController'

router
    .get('/', NewsController.all )
    .post('/create', NewsController.create )
    .get('/:id', NewsController.checkId, NewsController.fetchOne )
    .put('/:id', NewsController.checkId, NewsController.update )
    .delete('/:id', NewsController.checkId, NewsController.remove )

export default router