// Reto #2 ‘Suma’ de strings
// Crea un programa en el que le pidas en 3 variables distintas:
// nombre, apellido y comida favorita. Como salida mostrarás el
// mensaje Hola, mi nombres es {nombre} {apellido} y mi comida favorita es
// {comida} en un solo string.



const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Por favor ingrese su nombre  ", (nombre) => {
    readline.question(
      "Por favor ingrese su apellido  ",
      (apellido) => {
        readline.question(
          "Por favor ingrese su comida favorita  ",
          (comida) => {
            console.log(`Hola, mi nombre es ${nombre} ${apellido} y mi comida favorita es ${comida}`)
            readline.close();
          }
        );
      }
    );
  });
  