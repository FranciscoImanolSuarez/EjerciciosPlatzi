// Instrucciones: pide al usuario que indique su nombre y su edad. Como mensaje de salida le indicarás que edad tuvo el año pasado y cuantos años tendrá el siguiente año.
// Ejemplo: [nombre] el año pasado tenías X años y el próximo año cumplirás Y años.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Por favor ingresa tu Nombre ', nombre => {
   readline.question(`Hola ${nombre}, cuantos años tenes?`, edad => {
       console.log('Calculare tu edad el año pasado y la edad el año que viene')
       console.log(`Bien! Lo tengo ! el Año pasado tenias ${Number(edad) - 1}, y el año que viene tendras ${Number(edad) + 1}`);
       readline.close();
   })
 });