import ContactsModel from '../models/ContactModel'
import mongoose from '../libs/database'


export default {

    async checkId ( ctx, next ) {
        const id = ctx.params.id
        if ( !mongoose.Types.ObjectId.isValid( id ) ) ctx.throw(404)
        ctx.id = id
        await next()
    },
    async index ( ctx ) {
        ctx.body = await ContactsModel.find({})
    },
    async create ( ctx ) {

        try {

            await ContactsModel.create( ctx.request.body )
            ctx.body = 'Created'

        } catch ( err ) {
            ctx.throw(400, 'Bad data')
        }

    },
    async update ( ctx ) {

        try {
            await ContactsModel.findByIdAndUpdate( ctx.id, ctx.request.body )
            ctx.body = await ContactsModel.findById( ctx.id )
        } catch ( err ) {
            ctx.throw(400, 'Bad data')
        }

    }, 
    async fetchOne( ctx ) {
        const user = await ContactsModel.findById( ctx.id )
        const { title, content, link } = user;
        ctx.body = { title, content, link }
    },
    async remove ( ctx ) {
        try {
            await ContactsModel.findByIdAndDelete( ctx.id )
            ctx.body = 'Deleted'
        } catch ( err ) {
            ctx.throw(404, 'user with this id not found');
        }
    }
    
}