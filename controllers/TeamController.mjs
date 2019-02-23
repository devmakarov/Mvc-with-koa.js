import TeamMember from'../models/TeamMemberModel.mjs'
import QueryBuilder from '../libs/QueryBuilder'

export default {

    QueryBuilder,

    async checkId( ctx, next ) {
        await QueryBuilder.checkId( ctx, next )
    },
    async index( ctx ) {
        ctx.body = await QueryBuilder.all( TeamMember, {} )
    },
    async create( ctx ) {
        ctx.body = await QueryBuilder.create( TeamMember, ctx, {
             data: {
                image: ctx.request.files.image.name,
                name: ctx.request.body.name,
                position: ctx.request.body.position
            }
        })
    },
    async update( ctx ) {
        ctx.body = await QueryBuilder.update(TeamMember, ctx, {
            data: {
                image: ctx.request.files.image.name,
                name: ctx.request.body.name,
                position: ctx.request.body.position
            }
        })
    },
    async fetchOne( ctx ) {
        ctx.body = await QueryBuilder.fetchOne( TeamMember, ctx )
    },
    async remove( ctx ) {
        ctx.body = await QueryBuilder.remove( TeamMember, ctx )
    }

}



