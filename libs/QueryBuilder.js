const mongoose = require('./database')

module.exports = {

    async checkId( ctx, next ) {
        const id = ctx.params.id
        if ( !mongoose.Types.ObjectId.isValid( id ) ) ctx.throw( 404 )
        ctx.id = id
        await next()
    },
    async fetchOne ( model, id ) {
        const item = await model.findById( id )
        return JSON.stringify( item )
    },
    async all ( model ) {
        const data = await model.find({})
        return JSON.stringify( data )
    },
    async create ( model, ctx, request ) {
        try {
            await model.create( request.data )
            return 'Created'
        } catch (err) {
            ctx.throw( 400, 'Bad data' )
        }
    },
    async update( model, ctx, request ) {
        try {
            await model.findByIdAndUpdate( ctx.id, request.data )
            const item = await model.findById( ctx.id )
            return item
        } catch ( err ) {
            return ctx.throw( 400, 'Bad data' )
        }
    },
    async remove( model, ctx) {
        try {
            await model.findByIdAndDelete( ctx.id )
            return 'Deleted'
        } catch (err) {
            return ctx.throw( 404, 'user with this id not found' );
        }
    }

}