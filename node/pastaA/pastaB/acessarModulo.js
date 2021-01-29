const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((request, response) => {
    response.write('Bom dia carinha\n')
    response.write(c.ola2)
    response.end()
}).listen(8080)