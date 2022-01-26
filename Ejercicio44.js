/*
Dado un string devolver un string con las cadenas que esten formados por más de 2 palabras
*/

function dosPalabras(elementos) {
  let nuevosElementos = [];
  for (const palabra of elementos) {
    let tieneEspacio = palabra.split(" ").length >= 2;
    if (tieneEspacio) {
      nuevosElementos.push(palabra);
    }
  }
  return nuevosElementos;
}

let resultado = dosPalabras(["Un nuevo", "elemento", "dos palabras o mas"]);
console.log(resultado);
