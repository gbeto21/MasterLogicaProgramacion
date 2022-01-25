/*
Poner en mayuscala las palabras iniciales de una cadena de texto.


*/

function enMayuscula(texto) {
  let resultado = "";

  for (letra in texto) {
    let letraAnteriorEsEspacio = texto[letra - 1] === " ";
    let letraEsCero = parseInt(letra) === 0;
    if (letraAnteriorEsEspacio || letraEsCero) {
      resultado += texto[letra].toUpperCase();
    } else {
      resultado += texto[letra];
    }
  }

  return resultado;
}

console.log(enMayuscula("funcion que convierte en mayúscula."));
