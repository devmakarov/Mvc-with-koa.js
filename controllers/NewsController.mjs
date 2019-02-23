import ResourceModel from '../models/ResourcesModel'
import QueryBuilder from '../libs/QueryBuilder'

export default {

    QueryBuilder,

    async checkId ( ctx, next ) {
        await QueryBuilder.checkId( ctx, next )
    },
    async all ( ctx ) {
        ctx.body = await QueryBuilder.all( ResourceModel, { type: 0 } )
    },
    async create ( ctx ) {
        ctx.body = await QueryBuilder.create( ResourceModel, ctx, {
            data: {
                image: ctx.request.files.image.name, 
                title: ctx.request.body.title, 
                content: ctx.request.body.content, 
                type: ctx.request.body.type
            }
        } )
    },
    async update ( ctx ) {
        ctx.body = await QueryBuilder.update( ResourceModel, ctx, {
            data: {
                image: ctx.request.files.image.name,
                title: ctx.request.body.title,
                content: ctx.request.body.content,
                type: ctx.request.body.type
            }
        } )
    },
    async fetchOne ( ctx ) {
        ctx.body = await QueryBuilder.fetchOne( ResourceModel, ctx )
    },
    async remove ( ctx ) {
        ctx.body = await QueryBuilder.remove( ResourceModel, ctx )
    }

}



