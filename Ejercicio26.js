/*
Dado un numero mostrar su serie de fibonancci.
*/

function fibonacci(numero) {
  let serie = [0, 1];
  for (let index = 2; index <= numero; index++) {
    serie.push(serie[index - 1] + serie[index - 2]);
  }
  return [serie, serie[numero]];
}

let fibonanciResult = fibonacci(10) 
console.log("Serie: ", fibonanciResult[0], "Suma: ", fibonanciResult[1]);
