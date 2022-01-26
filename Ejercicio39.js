/*
Dado un texto comprobar que es un email válido
*/

function validarEmail(string) {
  return /^\w+@\w+\.\w+$/gi.test(string);
}

console.log(validarEmail("miemail@dominio.com"));
