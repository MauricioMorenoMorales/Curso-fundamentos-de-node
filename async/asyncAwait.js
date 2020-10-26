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

async function main() {
  let nombre = await hola('mauricio')
  await hablar()
  await hablar()
  await hablar()
  await adios(nombre)
}

console.log('Segundo console.log')
main()
console.log('Segundo console.log')