function hola(nombre, miCallback){
  //console.log('Hola, soy una funcion asincrona')
  setTimeout(() => {
    console.log(`Funcion Hola ${nombre}`)
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallback){
  setTimeout(() => {
    console.log(`Funcion Adios ${nombre}`)
  }, 1000);
}

console.log('Iniciando proceso...')

hola('carlos',function(nombre){
  adios(nombre, function(){
    console.log('Terminando proceso')
  })
  console.log('terminando proceso dentro de los callbacks...')
})

// hola('Carlos', function(){})
// adios('Carlos', function(){})
console.log('Terminando proceso...')