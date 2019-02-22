exports.init = app => {

    app.use( async ( ctx, next ) => {
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Access-Control-Allow-Headers', '*')
        ctx.set('Access-Control-Allow-Methods', '*')
        await next()
    })

}