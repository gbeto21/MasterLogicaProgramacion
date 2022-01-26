/*
Dado un número mostrar el listado de los números al cuadrado 
de cada número hasta llegar a ese número
*/

function cuadrado(numero) {
  return numero * numero;
}

function mostrar(numero) {
  for (let indice = 0; indice <= numero; indice++) {
    console.log(cuadrado(indice));
  }
}

console.log(mostrar(21));
