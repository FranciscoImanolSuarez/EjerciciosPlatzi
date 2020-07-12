// Reto #1 Longitud del string
// Pide a tu usuario que ingrese el nombre de su
// curso favorito, obtén la longitud de ese string y muéstralo en pantalla.




const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Ingrese su curso favorito ', curso => {
    console.log(`${console.log(curso.length)}`)
    readline.close();
 });