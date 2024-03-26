const fs = require("fs");

const lecturaArchivo = fs.readFileSync('./data/first.txt', 'utf-8')
console.log(lecturaArchivo)

const content = 'Este es el content del nuevo archivo'

fs.writeFileSync('./data/third.txt', content, {
    flag: 'a'
})

