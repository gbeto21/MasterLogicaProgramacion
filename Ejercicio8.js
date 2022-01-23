/*
Dado un número entero, inviértelo y devuelve de nuevo el entero
- Convertir un array por cada letra
- Darle la vuelta
- Unir el array en un string

*/

function invertirNumero(numero) {
  let invertido =
    parseInt(numero.toString().split("").reverse().join("")) *
    Math.sign(numero);
  return invertido;
}

console.log(invertirNumero(21));
console.log(invertirNumero(-21));
