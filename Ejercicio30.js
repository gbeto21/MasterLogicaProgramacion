/*
Dado un array de números, eliminar los strings y los 
elementos duplicados.
*/

function eliminarDuplicados(elementos) {
  elementos = elementos.filter((elemento) => {
    return typeof elemento == "number";
  });
  let set = new Set(elementos);
  return Array.from(set);
}

let eliminados = eliminarDuplicados([1, 3, 68, 18, 3, 51, 68, "hey"]);
console.log(eliminados);
