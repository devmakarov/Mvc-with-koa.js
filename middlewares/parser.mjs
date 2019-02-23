import bodyParser from 'koa-body'

const init = app => app.use( bodyParser({
    formidable: {
        uploadDir:  'public/uploads', // upload directory
        keepExtensions: true // keep file extensions
    },
    multipart: true,
    urlencoded: true,
}))

export default { init }