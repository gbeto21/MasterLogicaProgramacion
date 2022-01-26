/*
Dado un objeto comprobar si existe una propiedad
*/

function validaPropiedad(objeto, propiedad) {
  return (
    typeof objeto == "object" &&
    typeof propiedad == "string" &&
    hasOwnProperty.call(objeto, propiedad)
  );
}

console.log(validaPropiedad({ nombre: "Yo", edad: 182 }, "ocupacion"));
