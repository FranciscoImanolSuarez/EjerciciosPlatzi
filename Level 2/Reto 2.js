// Reto #2 - En el rango, por favor.
// Pide al usuario que indique 2 números: uno que servirá como 
// límite y otro para comparar. Si el segundo número es menor al primero, 
// mostrarás un mensaje diciendo “ El número ‘x’ se encuentra en el rango,
// gracias” y en caso contrario dirá “El número ‘x’ excede el límite permitido”.



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Por favor ingresa el primer numero ', n1 => {
   readline.question('Por favor ingrese el numero maximo(limite)', n2 => {
    console.log(`${n1 > n2 ? `El numero ${n1} excede el rango el cual es ${n1}`  : `El numero ${n1} se encuentra dentro del rango` }`)
    readline.close();
   })
 });