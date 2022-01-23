/*
Dada una cadena de texto, comprobar si es un palindromo o no

- Separar el texto en un array de letras
- Darle la vuelta
- Unir el array de letras en un string y comparr con el parámetro

*/

function palindromo(texto) {
  let invertido = texto.split("").reverse().join("");
  let sonIguales = invertido === texto;
  return sonIguales;
}

console.log(palindromo("ANA"));
