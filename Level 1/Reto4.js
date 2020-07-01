// Instrucciones: otro clásico conocido, donde pedirás al usuario que ingrese 2 números y muestre en pantalla el resultado. Si quieres añadir más dificultad puedes utilizar números con punto decimal y especificar el número de decimales después del punto.
// Ejemplo: 2.5633 + 5.6883 = 8.25


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Por favor Ingrese el primer numero a sumar ', n1 => {
   readline.question('Por favor ingrese el segundo numero a sumar', n2 => {
       const result = Math.round(parseFloat(n1) + parseFloat(n2))
       console.log(result);
       readline.close();
   })
 });