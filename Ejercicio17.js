/*
Para los múltipos de 3 imprimir lightyear
para múltipos de tres y cinco imprimer Buzzlightyear

- Condiciones numero actual multiplo de 3 o 5
- Crear uncion para recorrer y mostrar
- Bucle del 1 al número

*/

function buzz(numero) {
  let resultado = "";
  let esMultipoTres = numero % 3 === 0;
  let esMultipoCinco = numero % 5 === 0;
  if (esMultipoTres && esMultipoCinco) {
    resultado = "BuzzLightyear";
  }
  if (esMultipoTres) {
    resultado = "buzz";
  }
  if (esMultipoCinco) {
    resultado = "lightyear";
  } else {
    return numero;
  }

  return resultado;
}

function imprimir(numero) {
  for (let index = 1; index < numero; index++) {
    console.log(buzz(index));
  }
}

console.log(imprimir(15));
