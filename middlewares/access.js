exports.init = app => {

    app.use( async ( ctx, next ) => {
        ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
        await next()
    })

}