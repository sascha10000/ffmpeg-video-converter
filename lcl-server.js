//@ts-nocheck
//@ts-ignore

var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname + "\\.\\dist\\", { setHeaders(res, path) { res.setHeader("Cross-Origin-Opener-Policy", "same-origin"); res.setHeader("Cross-Origin-Embedder-Policy", "require-corp"); } }))
    .listen(8080, () => console.log('Server running on 8080...'));