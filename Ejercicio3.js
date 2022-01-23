/*
Buscar una frase dentro de un string y devolver cuántas veces 
aparece en la palabra

- Poner string en minúsculas
- Comprobar si la búsqueda esta incluida en la frase
- Crear un array de palabras de la frase
- Mapear esas palabras y ahcer un contador de cada una
- Devolver el contador de la búsqueda
*/

function coincidencias(frase, busqueda) {
  let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, "");
  let resultado = 0;
  let texto_incluye_frase = texto_limpio.includes(busqueda);
  if (texto_incluye_frase) {
    let palabras = texto_limpio.split(" ");
    let mapa = {};
    for (let palabra of palabras) {
      if (mapa[palabra]) {
        mapa[palabra]++;
      } else {
        mapa[palabra] = 1;
      }
    }
    resultado = mapa[busqueda];
  } else {
    resultado = 0;
  }
  return resultado;
}

console.log(
  "Número de coindicencias: ",
  coincidencias("Hola, que tal, soy yo, Hola.", "yo")
);
