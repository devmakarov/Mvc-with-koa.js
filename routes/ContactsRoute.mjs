import Router from 'koa-router'
const router = new Router({
    prefix: '/contacts'
})

import ContactsContoller from '../controllers/ContactsController'

router
    .get('/', ContactsContoller.index )
    .post('/create', ContactsContoller.create )
    .get('/:id', ContactsContoller.checkId, ContactsContoller.fetchOne)
    .put('/:id', ContactsContoller.checkId, ContactsContoller.update )
    .delete('/:id', ContactsContoller.checkId, ContactsContoller.remove )

export default router