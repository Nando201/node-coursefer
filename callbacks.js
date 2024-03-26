function walkDog(callback){
    setTimeout(() => {
      console.log('Pasee al perro')
      callback()
    } ,3000)
}

function cleanKitchen(callback){
  setTimeout(() => {
    console.log('Limpie la cocina')
    callback()
  } ,1500)
}

function takeTrash(callback){
  setTimeout(() => {
    console.log('Saque la basura')
    callback()
  } ,500)
}

walkDog( () => {
  cleanKitchen( () => { 
    takeTrash(() => {
      console.log('Termine todo')
    })
  })
})
