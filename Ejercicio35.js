/*
crear un array basado en un array
con el primero y el último elemento
*/

function primeroUltimo(elementos) {
  let nuevosElementos = [];
  nuevosElementos.push(elementos[0], elementos[elementos.length - 1]);
  return nuevosElementos;
}

console.log(primeroUltimo([102, 192, 843, 189, 743]));
