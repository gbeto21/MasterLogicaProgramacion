/*
Menor de 2 números.
*/

function mayorMenor(numero1, numero2) {
  let resultado = "";
  let sonIguales = numero1 == numero2;
  let numeroUnoEsMayor = numero1 > numero2;
  let numeroDosEsMayor = numero2 > numero1;
  if (sonIguales) {
    resultado = "Los números son iguales";
  }
  if (numeroUnoEsMayor) {
    resultado = `El número mayor es: ${numero1}.\n El número menor es: ${numero2}`;
  }
  if (numeroDosEsMayor) {
    resultado = `El número mayor es: ${numero2}.\n El número menor es: ${numero1}`;
  } else {
    resultado = "Favor de ingresar números válidos.";
  }
  return resultado;
}

console.log(mayorMenor(21, 211));
