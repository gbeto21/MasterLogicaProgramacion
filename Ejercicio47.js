/*
Dado un array de objetos devolver las afiiciones más comunes de los usuarios
*/

function aficiones(objetos) {
  let mapeo = {};
  objetos.forEach((objeto) => {
    for (const aficion of objeto.aficiones) {
      let existe = mapeo[aficion];
      if (existe) {
        mapeo[aficion]++;
      } else {
        mapeo[aficion] = 1;
      }
    }
  });

  return mapeo
}

const usuarios = [
  { nombre: "Usuario 1", aficiones: ["informatica", "cine", "videojuegos"] },
  { nombre: "Usuario 2", aficiones: ["cine", "futbol", "tenis"] },
  { nombre: "Usuario 3", aficiones: ["futbol", "cine", "videojuegos"] },
];

let resultado = aficiones(usuarios);
console.log(resultado);
