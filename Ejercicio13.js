/*
Dado un array dividirlo en tantos sub-arrays
como sea necesario basandonos en un número que indique su tamaño

*/

function divideArray(array_principal, numero_elementos) {
  let arreglos = [];

  for (let elemento of array_principal) {
    let ultimo = arreglos[arreglos.length - 1];
    if (!ultimo || ultimo.length === numero_elementos) {
      arreglos.push([elemento]);
    } else {
      ultimo.push(elemento);
    }
  }
  return arreglos;
}

console.log(divideArray([8, 91, 9, 1, 2, 5, 6], 2));
