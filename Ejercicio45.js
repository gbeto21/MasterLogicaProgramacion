/*
Mostrar cuantos alumos estan reprobados y cuantos no
*/

function suspensos(alumnos) {
  let aprobados = 0,
    suspensos = 0;
  for (const alumno of alumnos) {
    let aprobado = alumno[1] >= 5;
    if (aprobado) {
      aprobados++;
    } else {
      suspensos++;
    }
  }
  return {
    aprobados,
    suspensos,
  };
}

let resultado = suspensos([
  ["Alumno 1", 2],
  ["Alumno 2", 8],
]);
console.log(resultado);
