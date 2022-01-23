/*
Dado un string y un número, repetir el string tantas veces como el número indicque

*/

// Función clásica
function repiteme(texto, numero_repeticiones) {
  let resultado = "";
  for (let index = 0; index < numero_repeticiones; index++) {
    resultado += texto;
  }
  return resultado;
}

// Función prototipo
String.prototype.repiteme = function (numero_repeticiones) {
  let resultado = "";
  for (let index = 0; index < numero_repeticiones; index++) {
    resultado += this;
  }
  return resultado;
};

console.log(repiteme("Hola", 8));
console.log("Hola".repiteme(5));
