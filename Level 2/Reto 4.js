// Reto #4 - “I like turtles”
// Escribe un programa que pida al usuario ingrese su animal favorito,
// si coloca ‘Tortuga’, ‘tortuga’, ‘TORTUGA’ o cualquier otra variante
// de la palabra entonces mostrar en pantalla “También me gustan las tortugas”.
// En caso contrario mostrar el mensaje “Ese animal es genial,
// pero prefiero las tortugas”.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Ingrese su animal favorito ', animal => {
    console.log(`${(animal.toUpperCase()).includes('TORTUGA') ? `Tambien me gustan las tortugas`  : 'Ese animal es genial, pero prefiero las tortugas' }`)

    readline.close();
 });