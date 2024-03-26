function sumar(num1,num2, callback){
    let resultado = num1 + num2
    callback(resultado)
}

function multiplicar(resultado,callback){
    let resultado2 = resultado * 2
    callback(resultado2)
}


function restarCinco(resultado2, callback){
    let resultado3 = resultado2 - 2
    callback(resultado3)
}

function dividir(resultado3, callback){
    let resultado4 = resultado3 / 2
    callback(resultado4)
}
sumar(5,2, (resultado) => {
    multiplicar(resultado, (resultado2) => {
        restarCinco(resultado2, (resultado3) => {
           dividir(resultado3, (resultado4) => {
                console.log(resultado4)
           })
        })
    })
})