/*
Devolver las películas que ya hayas visto
*/

function misPeliculas(peliculas) {
  for (const pelicula of peliculas) {
    let para_mostrar = `"${pelicula.titulo} de ${pelicula.director}"`;
    if (pelicula.vista) {
      console.log("Ya has visto: ", para_mostrar);
    } else {
      console.log("Te falta por ver: ", para_mostrar);
    }
  }
  return peliculas;
}

const coleccion_peliculas = [
  {
    titulo: "El señor de los anillos",
    director: "Peter Jackson",
    vista: true,
  },
  {
    titulo: "La liga de la justicia",
    director: "Zack",
    vista: false,
  },
  {
    titulo: "Vengadores",
    director: "Joe Ross",
    vista: true,
  },
  {
    titulo: "Batman vs Superman",
    director: "Zack",
    vista: false,
  },
];

misPeliculas(coleccion_peliculas);
