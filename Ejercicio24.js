/*
Dado un array de enteros y un nmero, detectar si esa lista de numeros 
es una permutación del 1 al número aportado
*/

function permutacion(secuencia, numero) {
  for (let indice = 0; indice < numero; indice++) {
    let indiceSiguiente = secuencia.indexOf(indice + 1);
    if (indiceSiguiente < 0) {
      return false;
    }
  }
  return true;
}

console.log(permutacion([1, 2, 3, 4, 5], 5));
