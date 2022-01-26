/*
Dado un string devolver las palabras que aparecen una vez y cuál es la primera
*/

function soloUnaVez(texto) {
  let contadores = {},
    resultado = [];
  letras = texto.split("").filter((letra) => letra.trim().length > 0);

  for (const letra of letras) {
    let noExiste = contadores[letra];
    if (noExiste) {
      contadores[letra] = 1;
    } else {
      contadores[letra]++;
    }
  }

  for (const letra in contadores) {
    if (contadores[letra] == 1) {
      resultado.push(letra);
    }
  }

  return [resultado, resultado[0]];
}

let resultado = soloUnaVez("Solo una vez Solo una Solo");
console.log(resultado);
