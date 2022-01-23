/*
Dibujar un cuadrado hueco con asteriscos

- Funcion crear el lado de arriba y el lado de abajo
- Función que haga los lados y el hueco del cuadrado
- Bucle del 0 al tamaño del lado menos 2, para equilirar con el lado de arriba y abajo.
- Bucle para pintar los espacios, menos 2 para equilibrar con el asterisco de izq. y der.
- Ir concatenando en una variable cada línea del cuadrado.
- Mostrar el cuadrado en la función principal

*/

function lado(numero) {
  let lado = "";
  for (let i = 0; i < numero; i++) {
    lado += "*";
  }
  return lado;
}

function cuadrado(numero) {
  let dibujo = lado(numero) + "\n";
  let contenido = "";
  for (let i = 0; i < numero - 2; i++) {
    contenido = "*";
    for (let x = 0; x < numero - 2; x++) {
      contenido += " ";
    }
    contenido += "*";
    dibujo += contenido + "\n";
  }
  dibujo += lado(numero);
  return dibujo;
}

console.log(cuadrado(10));
