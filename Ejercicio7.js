/*
Dados dos números devolver cuántos números impares hay entre ellos.

- FUncion que reciba dos números
- Bucl de número1 al número2
- Si el resto es distinto a cero, es impar
- Aumentar el contador

*/

function impares(numero1, numero2) {
  let contador = 0;

  while (numero1 < numero2) {
    let esImpar = numero1 % 2 !== 0;
    if (esImpar) {
      contador++;
    }
    numero1++;
  }
  return contador;
}

console.log("Números impares:", impares(1, 100));
