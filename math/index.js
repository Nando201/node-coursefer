function add(x,y){
    return x + y
}
function subtract(x,y){
    return x - y
}
function divide(x,y){
    return x / y
}
function multiply(x,y){
    return x * y
}

function imprimirResultado(result){
    console.log('El resultado de la operacion es: ' + result)
}

module.exports = {
    add,
    subtract,
    divide,
    multiply
}