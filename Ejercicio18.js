/*
Dado un numero, mostrar todos su numeros divisores
- Crear una función de un número es divisor de otro
- Crear función para recorrer y mostrar
*/

function divisor(numero, posile_divisor) {
  let esDivisor = numero % posile_divisor === 0;
  if (esDivisor) {
    return posile_divisor;
  }
  return 0;
}

function mostrarDivisores(numero) {
  for (let index = 1; index <= numero; index++) {
    let esDivisor = divisor(numero, index);
    if (esDivisor) console.log(esDivisor);
  }
}

mostrarDivisores(21);
