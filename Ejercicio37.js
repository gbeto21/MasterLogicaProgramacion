/*
Dado un array devolver el elemento que más aparece.
*/

function masAparecido(elementos) {
  let mapeo = {},
    masFrecuente = "",
    valorMasFrecuente = 0;
  let esString = typeof elementos == "string";
  if (esString) {
    elementos = elementos.split(" ");
  }
  for (const elemento of elementos) {
    let elementoExiste = mapeo[elemento];
    if (elementoExiste) {
      mapeo[elemento]++;
    } else {
      mapeo[elemento] = 1;
    }
  }

  for (const elemento in mapeo) {
    let esFrecuente = mapeo[elemento] > valorMasFrecuente;
    if (esFrecuente) {
      valorMasFrecuente = mapeo[elemento];
      masFrecuente = elemento;
    }
  }

  return {
    masFrecuente,
    valorMasFrecuente,
  };
}

let resultado = masAparecido("Una frase de una una una cadena de texto");
console.log(resultado);
