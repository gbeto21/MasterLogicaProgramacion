/*
Definir si un anagrama es de otro string

*/

function limpiarTexto(texto) {
  return texto.replace(/[^\w]/gi, "").toLowerCase().split("").sort().join("");
}

function anagramas(texto1, texto2) {
  return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(anagramas("SeRgIO", "Riesgo"));
