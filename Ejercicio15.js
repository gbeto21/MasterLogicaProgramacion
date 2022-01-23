/*
Dado una cadena de texto devolver el caracter más usado
- Mapear letras en un json
- Recorremos el mapeo
- Hacer condición para ver cuál es mayor
*/

function masUsado(texto) {
  let mapeo_letras = {};
  let maximo_repteticiones = 0;
  let letra_mas_repetida = "";

  for (const letra of texto) {
    if (!mapeo_letras[letra]) {
      mapeo_letras[letra] = 1;
    } else {
      mapeo_letras[letra]++;
    }
  }

  for (let letra in mapeo_letras) {
    if (
      mapeo_letras[letra].toString().trim().length === 1 &&
      mapeo_letras[letra] > maximo_repteticiones
    ) {
      maximo_repteticiones = mapeo_letras[letra];
      letra_mas_repetida = letra;
    }
  }

  return letra_mas_repetida;
}

console.log(
  "La letra más repetida es: ",
  masUsado("Un dumy texto utilizadoooooo.")
);
