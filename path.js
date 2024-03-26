const path = require('path')


const filePath = path.join(__dirname, '/autoCAD', 'sesion01', 'archivo.dwg')

const fileName = path.basename(filePath)

console.log(path.dirname(filePath))
console.log(path.parse(filePath))
console.log(path.resolve('mokepon.js'))