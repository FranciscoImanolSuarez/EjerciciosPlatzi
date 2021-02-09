// Reto #5 Mayúsculas y minúsculas
// Solicita a tu usuario que indique 2 palabras
// donde al mostrarlas en pantalla una estará totalmente en mayúsculas y otra en minúsculas ¿fácil, no?

const { read } = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Por favor ingrese una palabra  ", (palabraUno) => {
  readline.question("Por favor ingrese otra palabra  ", (palabraDos) => {
    console.log(
      `Palabra uno en minuscula ${palabraUno.toLowerCase()}, Palabra dos en Mayuscula ${palabraDos.toUpperCase()}`
    );
    readline.close();
  });
});
