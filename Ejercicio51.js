/*
Devolver un array con números pares e impares en otro array
*/

function paresImpares(array) {
  return {
    pares: array.filter((numero) => numero % 2 == 0),
    impares: array.filter((numero) => numero % 2 != 0),
  };
}

let resultado = paresImpares([18, 17, 37, 47, 68]);
console.log(resultado);
