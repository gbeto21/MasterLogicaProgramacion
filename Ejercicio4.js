/*
Dada una cadena de texto, darle la vuelta e invertir el orden de sus 
caracteres, sin usar métodos propios del lenguaje,
solo estructuras de control
*/

function invertir(texto) {
  let invertido = "";
  for (let letra of texto) {
    invertido = letra + invertido;
  }
  console.log(invertido);
  return invertido;
}

function invertir2(texto) {
  return texto.split("").reverse().join("");
}

console.log("Invertido: ", invertir("gbeto21"));
console.log("Invertido con invertir2: ", invertir2("gbeto21"));
