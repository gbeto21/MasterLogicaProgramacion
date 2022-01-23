/*
Dada una cadena de texto devolver cuántas vocales tiene

- Methodo match con expresión regular
- Devolver resultado

*/

function vocales(texto) {
  let coincidencias = texto.match(/[aeiou]/gi);

  return coincidencias ? coincidencias.length : 0;
}

console.log("Numero de vocales: ", vocales("Domingo 23 enero "));
