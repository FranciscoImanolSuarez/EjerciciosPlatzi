// Reto #1 - Número mayor y menor
// Escribe un programa que pida al usuario 2 números, mostrando como salida cuál es el número mayor y
// la diferencia de uno respecto al otro. En caso de que los números sean iguales, mostrarlo también en pantalla.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Por favor ingresa el primer numero ', n1 => {
   readline.question('Por favor ingrese el segundo numero', n2 => {
    const mayor = Math.max(n1,n2)    
    const diferencia = Math.abs(n1 - n2)
    console.log(`El numero Mayor es ${mayor},  ${diferencia != 0 ? `La diferencia es de ${diferencia}`  : 'y los numeros son iguales por lo cual no hay diferencia' }`)
    readline.close();
   })
 });