// Reto #3 Ajusta las iniciales
// Ahora, pedirás a tu usuario que ingrese su nombre, apellido y
// país de origen en minúsculas. Después mostrarás los datos de
// salida con mayúscula inicial al tratarse de nombres propios.

const { type } = require("os");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Por favor ingrese su nombre  ", (nombre) => {
  readline.question("Por favor ingrese su apellido  ", (apellido) => {
    const mayusculas = (n) => {
      if (typeof n !== "string") return "";
      return n.charAt(0).toUpperCase() + n.slice(1);
    };

    console.log(`Hola, mi nombre es ${mayusculas(nombre)} y mi apellido es ${mayusculas(apellido)}`);

    readline.close();
  });
});
