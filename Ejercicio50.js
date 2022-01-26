/*
Dado un numero devolver cuántos bucles tiene
*/

function bucles(numero) {
  let numeros = numero.toString().split("");
  let bucles = 0;

  for (let numero of numeros) {
    numero = parseInt(numero);
    let esBucle = numero === 0 || numero === 6 || numero === 9;
    let esDobleBucle = numero == 8;
    if (esBucle) {
      bucles++;
    }
    if (esDobleBucle) {
      bucles += 2;
    }
  }
  return bucles;
}

let resultado = bucles(81822359);
console.log(resultado);
