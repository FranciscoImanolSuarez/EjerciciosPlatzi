// Instrucciones: Ahora que sabemos incluir nombres, podemos agregar más datos. Intentemos con un apellido
// para tener algo así: ``Hola, [nombre] [apellido]```

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Como te llamas? ', nombre => {
    readline.question('Como es tu apellido? ', apellido => {
        console.log(`Hola, ${nombre}, ${apellido}`);
        readline.close();
    });
 });