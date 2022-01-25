/*
Dado un numero indicar si es capicua.
*/

function capicua(numero) {
  let procesado = parseInt(numero.toString().split("").reverse().join(""));
  return numero == procesado;
}

console.log(capicua(202));
