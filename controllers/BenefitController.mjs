import BenefitModel from '../models/BenefitModel'
import QueryBuilder from '../libs/QueryBuilder'

export default  {

    QueryBuilder,

    async checkId ( ctx, next ) {
        await QueryBuilder.checkId( ctx, next ) 
    },
    async index ( ctx ) {
        ctx.body = await QueryBuilder.all( BenefitModel, {} ) 
    },
    async create ( ctx ) {
        ctx.body = await QueryBuilder.create( BenefitModel, ctx ) 
    },
    async update ( ctx ) {
        ctx.body = await QueryBuilder.update(BenefitModel, ctx, { data: ctx.request.body } )
    },
    async fetchOne ( ctx ) {
        ctx.body =  await QueryBuilder.fetchOne( BenefitModel, ctx )
    },
    async remove( ctx ) {
        ctx.body = await QueryBuilder.remove( BenefitModel, ctx )
    }

}



 