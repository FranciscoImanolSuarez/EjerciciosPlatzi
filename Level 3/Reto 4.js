// Reto #4 String fragmentado
// Pongámonos más exigentes 💥
// Solicita a tu usuario que indique una oración de 10 o más caracteres
// la línea de un poema o canción funcioona excelente. Calcula la longitud del
// string, pide un número de rango inicial y final que esté entre la longitud del
// string para al final mostrar el fragmento que incluya los caracteres en ese
// intervalo.

const { type } = require("os");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Por favor ingrese una oracion mayor a 10 caracteres  ", (oracion) => {

    
    readline.close();
});
