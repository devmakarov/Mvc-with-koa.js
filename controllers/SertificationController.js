const SertificationModel = require('../models/SertificationModel')
const mongoose = require('../libs/database')


module.exports = {

    async checkId ( ctx, next ) {

        const id = ctx.params.id
        if ( !mongoose.Types.ObjectId.isValid( id ) ) ctx.throw( 404 ) 
        ctx.id = id
        await next()

    },
    async all ( ctx ) {
        ctx.body = await SertificationModel.find({})
    },
    async create ( ctx ) {    
        try {
            await SertificationModel.create( { image: ctx.request.files.file.name })
            ctx.body = 'Created'
        } catch ( err ) {
            ctx.body = err
        }    
    },
    async fetchOne ( ctx ) {
        try {
        const sertification = await SertificationModel.findById( ctx.id )
        ctx.body = sertification
        } catch (err) {
            ctx.throw(404, 'user with this id not found');
        }
    },
    async update( ctx ) {

        try {
            await SertificationModel.findByIdAndUpdate( ctx.id, { image: ctx.request.files.file.name } )
            ctx.body = 'Updated'
        } catch ( err ) {
            ctx.throw( 400, 'Bad data' )
        }

    },
    async remove ( ctx ) {
        try {
            await SertificationModel.findByIdAndDelete( ctx.id )
            ctx.body = 'Deleted'
        } catch (err) {
            ctx.throw(404, 'user with this id not found');
        }
    },


}