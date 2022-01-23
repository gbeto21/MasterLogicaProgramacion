/*
Dados dos array, devolver array con solo los elementos comunes

- Filtrar array y evaluando una condición
- Devolver array nuevo

*/

function elementosComunes(array1, array2) {
  const filtrado = array1.filter((elemento) => array2.includes(elemento));
  return filtrado;
}

console.log(elementosComunes([4, 5, 7, 19], [29, 19, 5, 13]));
