/*
Dada una cadena de texto y un número, recortar el string
mostrando los X primeros caracteres
*/

function recortar(texto, hasta) {
  let resultado = "";
  let textoEsString = typeof texto === "string";
  let hastaEsNumero = typeof hasta === "number";
  if (textoEsString && hastaEsNumero) {
    resultado = texto.substring(0, hasta);
  } else {
    resultado = "Introduce bien los datos.";
  }
  return resultado;
}

console.log(recortar("Tomando curso para lógica de programación.", 13));
