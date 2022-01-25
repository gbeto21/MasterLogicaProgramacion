/*
Dado un string ponerlo completo en mayúsculas si hay más mayusculas
y en minusculas si hay más minúsculas
*/

function mayusMinus(texto) {
  let mayusculas = 0;
  let minusculas = 0;
  let resultado = "";

  for (letra of texto) {
    let esMayuscula = /[A-Z]/.test(letra);
    if (esMayuscula) {
      mayusculas++;
    } else {
      minusculas++;
    }
  }

  let mayusculasEsMayor = mayusculas > minusculas;
  if (mayusculasEsMayor) {
    resultado = texto.toUpperCase();
  } else {
    resultado = texto.toLowerCase();
  }
  return resultado;
}

console.log(mayusMinus("minUscLAs preva"));
