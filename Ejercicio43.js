/*
Dado un array sacar la media de ellos
*/

function media(numeros) {
  let suma = numeros.reduce(
    (valorAcumulado, numeroActual) => valorAcumulado + numeroActual
  );
  return suma / numeros.length;
}

let resultado = media([81, 93, 91, 829, 92]);
console.log(resultado);
