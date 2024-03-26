const fs = require("fs");

/*
console.log('Lee el primer archivo')
const first = fs.readFileSync("./data/first.txt", "utf-8");
console.log(first)

console.log('Por mientras realizo otro proceso')
console.log('Leer el segundo archivo')
const second = fs.readFileSync('./data/first.txt', 'utf-8') 
console.log(second) */ 


//const title = "New content";
//fs.writeFileSync("./data/second.txt", title); 

console.log('Lee el primer archivo')
fs.readFile('./data/first.txt', 'utf-8', (err,text) => {
    console.log(text)
})

console.log('Por mientras realizo otro proceso')
console.log('Leer el segundo archivo')

fs.readFile('./data/second.txt', 'utf-8', (err,text) => {
    console.log(text)
})

