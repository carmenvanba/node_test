var http = require('http').createServer()
function webServer(req, res){
    //200 código de que todo va bien, contrario al 404 ó 400
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hola Node.js</h1><p>Lets go</p>')
}
http
    .on('request', webServer)
    .listen(3000, 'localhost')
    
console.log('Sevidor corriendo en http://localhost:3000/')