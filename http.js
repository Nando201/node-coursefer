const http = require('http')

http.createServer(function (request,response){
    if(request.url == '/'){
        response.write('Welcome')
        return response.end()
    }
    if(request.url == '/cursos'){
        response.write('Esta es la lista de cursos')
        return response.end()
    }
    
    response.write(`
        <h1>Este es un puto titulo</h1>
        <a href='/'>Volver a la web principal </a>
    `)
    response.end()

}).listen(3000)

console.log('Servidor escuchando en el puerto 3000')


 