const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Por favor ingresa el primer numero ', n1 => {
   readline.question('Por favor ingrese el numero maximo(limite)', n2 => {
    console.log(`n1 > n2 ? El numero ${n2} excede el limite : El numero ${n1} se encuentra en el rango`)
    readline.close();
   })
 });