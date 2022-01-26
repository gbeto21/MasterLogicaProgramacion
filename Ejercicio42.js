/*
Dados dos numeros sacar un número aleatorio entre ellos
*/

function aleatorio(minimo, maximo) {
  return Math.round(Math.random() * (maximo - minimo) + minimo);
}

console.log(aleatorio(1, 40));
