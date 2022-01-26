/*
Dado un texto devolver cuantas consonantes y vocales tiene
*/

function cuentaLetras(texto) {
  let consonantes = 0,
    vocales = 0,
    texto_limpio = "";
  texto_limpio = texto
    .split("")
    .filter((letra) => /[áéíóú\w]/gi.test(letra) && isNaN(letra))
    .join("");

  for (const letra of texto_limpio) {
    let esVocal = /[áéíóúaeiou]/gi.test(letra);
    if (esVocal) {
      vocales++;
    } else {
      consonantes++;
    }
  }
  return [consonantes, vocales];
}

let letras = cuentaLetras("Cuenta cuantas vocales y consonantes tiene");
console.log(`Consonantes: ${letras[0]} y vocales: ${letras[1]}`);
