function hola(nombre, miCallback){
  setTimeout(() => {
    console.log(`Funcion Hola ${nombre}`)
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar){
  setTimeout(function(){
    console.log('Bla bla bla bla....')
    callbackHablar()
  }, 1000);
}

function adios(nombre, otroCallback){
  setTimeout(() => {
    console.log(`Funcion Adios ${nombre}`)
    otroCallback()
  }, 1000);
}

function conversacion(nombre, veces, callback ){
  if(veces >= 0){
    hablar(function(){
      conversacion(nombre, --veces, callback)
    })
  }else{
    adios(nombre, callback)
  }
}

//---

console.log('Console log inicial')

hola('carlos', function(nombre){
  hablar(function() {
    hablar(function() {
      adios(nombre,function() {
        console.log('terminando proceso')
      })
    })
  })
})

console.log('Console log final')