/*
Dado un texto y una búsqueda, censuar todas las coincidencias de la búsqueda
en el texto con [-CENCURADO-]



*/

function cencurado(texto = false, busqueda = false) {
  let resultado = "";
  if (!texto && !busqueda) {
    resultado = "No puedes leer el texto y la búsqueda.";
  }

  if (!texto && busqueda) {
    resultado = "No puedes leer el texto";
  }
  if (texto && !busqueda) {
    resultado = "";
  }
  if (texto && busqueda) {
    resultado = texto.replace(new RegExp(busqueda, "gi"), "[-CENSURADO-]");
  }

  return resultado;
}

console.log(cencurado("hola hola, hey, ho", "hola"));
