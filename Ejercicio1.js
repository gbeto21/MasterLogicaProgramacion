function tablaMultiplicar(numero) {
  let resultado = `# Tabla del número: ${numero} #\n`;
  for (let index = 0; index <= 10; index++) {
    const multiplicacion = index * numero;
    resultado += `${index} x ${numero} = ${multiplicacion}\n`;
  }
  return resultado;
}

console.log(tablaMultiplicar(5));
