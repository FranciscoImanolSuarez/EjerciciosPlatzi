// Reto #1 “Hola Mundo”
// Instrucciones: este es un clásico de clásicos, pero haremos un pequeño cambio. En lugar de solo imprimir un mensaje en pantalla, pedirás al usuario que digite un nombre y
// mostrarás en pantalla lo siguiente: Hola, [nombre]


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Como te llamas? ', nombre => {
   console.log(`Hola, ${nombre}!`);
   readline.close();
 });