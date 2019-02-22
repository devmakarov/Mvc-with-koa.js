const Router = require('koa-router')
const router = new Router({
    prefix: '/contacts'
})

const ContactsContoller = require('../controllers/ContactsController')

router
    .get('/', ContactsContoller.index )
    .post('/create', ContactsContoller.create )
    .get('/:id', ContactsContoller.checkId, ContactsContoller.fetchOne)
    .put('/:id', ContactsContoller.checkId, ContactsContoller.update )
    .delete('/:id', ContactsContoller.checkId, ContactsContoller.remove )

module.exports = router