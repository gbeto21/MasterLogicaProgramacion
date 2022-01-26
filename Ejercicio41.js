/*
Dado un numero mostrar un triángulo de astericos con ese número
*/

function triangulo(numero) {
  let mitad = Math.floor(numero - 1);
  let resultado = "";
  //bucle total filas
  for (let fila = 0; fila < numero; fila++) {
    let nivel = "";

    //bucle para pintar asteriscos y espacios
    for (let columna = 0; columna < 2 * numero - 1; columna++) {
      let es = mitad - fila <= columna && mitad + fila >= columna;
      if (es) {
        nivel += "*";
      } else {
        nivel += " ";
      }
    }
    resultado += nivel + "\n";
  }
  return resultado;
}

console.log(triangulo(5));
