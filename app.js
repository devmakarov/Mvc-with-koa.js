const app = require('./server')
const config = require('config')


app.listen( config.get('port'), () => {
    console.log(`server listening on ${ config.get('port') } port`);
})
