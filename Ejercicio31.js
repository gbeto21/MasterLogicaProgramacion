/*
Dado un numero indicar qué tipo de ángulo es
*/

function angulo(grados) {
  let resultado = "Angulo completo.";
  let esAgudo = grados < 90;
  let esRecto = grados == 90;
  let esObtuso = grados > 90 && grados < 180;
  let esLlano = grados == 180;
  let esConcavo = grados > 180 && grados < 360;
  if (esAgudo) {
    resultado = "Angulo agudo";
  }
  if (esRecto) {
    resultado = "Angulo recto";
  }
  if (esObtuso) {
    resultado = "Angulo obtuso";
  }
  if (esLlano) {
    resultado = "Angulo llano";
  }
  if (esConcavo) {
    resultado = "Angulo concavo";
  }

  return resultado;
}

console.log(angulo(90));
