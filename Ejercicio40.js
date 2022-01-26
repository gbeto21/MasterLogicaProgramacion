/*
Devolver el valor más alto y el más bajo de un array
*/

function valores(numeros) {
  let ordenados = numeros.sort((a, b) => a - b);
  return {
    bajo: ordenados[0],
    alto: ordenados[ordenados.length - 1],
  };
}

let resultado = valores([28, 489, 19, 39, 109, 849, 7, 43]);
console.log(resultado);
