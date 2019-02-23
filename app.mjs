import app from './server.mjs'
import config from 'config'
 
app.listen( config.get('port'), () => {
    console.log(`server listening on ${ config.get('port') } port`);
})
