const bodyParser = require('koa-body')
const path = require('path')
 
exports.init = app => app.use( bodyParser({
    formidable: {
        uploadDir:  'public/uploads', // upload directory
        keepExtensions: true // keep file extensions
    },
    multipart: true,
    urlencoded: true,
}))