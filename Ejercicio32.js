/*
Dado un array devolver un array con los números elevados al cuadrado

*/

function alCuadrado(numeros) {
  let numeros_cuadrados = numeros
    .filter((numero) => typeof numero == "number")
    .map((numero) => Math.pow(numero, 2));

  return numeros_cuadrados;
}

let numeros = [12, 98, 183, 08];
let numerosCuadrado = alCuadrado(numeros);
console.log(numerosCuadrado);
