function hola(nombre, miCallback){
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log(`Funcion Hola ${nombre}`)
      resolve(nombre);
    }, 1500);
  })
}

function hablar(nombre){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla....')
      resolve(nombre)
    }, 1000);
  })
}

function adios(nombre){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Funcion Adios ${nombre}`)
    }, 1000);
  })
}

//-------

console.log('Primer console.log')
hola('Carlos')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then((nombre) => {
    console.log('Terminando el proceso')
  })
  .catch(error => console.log(error))