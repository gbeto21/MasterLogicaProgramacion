/*
Dado un número devolver un factorial
*/

function factorial(numero) {
  let resultado = 1;
  for (let indice = 1; indice <= numero; indice++) {
    resultado *= indice;
  }
  return resultado;
}

let numero = 5;
let factorialCalculo = factorial(numero);
console.log(`El factorial de ${numero} es: ${factorialCalculo}`);
