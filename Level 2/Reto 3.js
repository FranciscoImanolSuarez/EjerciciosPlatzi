// Reto #3 - Rangos cambiantes.
// Nuevamente pide a tu usuario que indique 3 números: 
// un límite superior, un límite inferior y uno de comparación.
// Si el número de comparación se encuentra entre los 2 primeros,
// comunicarlo en pantalla.
// En caso estar por debajo del límite inferior o por arriba del 
// límite superior, también mostrarlo en pantalla.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Por favor ingresa el primer numero ', n1 => {
   readline.question('Por favor ingrese el numero maximo(limite superior)', n2 => {
    readline.question('Por favor ingrese el numero maximo(limite minimo)', n3 => {
        
        if(n1 > n3 || n1 < n2 ){
           console.log('El numero esta dentro del rango')
        } else {
            console.log('Estas fuera de rango')
        }
        
    readline.close();
    })
    })
 });