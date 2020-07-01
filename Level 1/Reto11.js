// Instrucciones: pide al usuario ingresar un número mayor a 1000 y otro menor a 100. Indica de una forma sencilla de entender al usuario cuantas veces cabe el número menor a 100 en el número mayor a 1000

const { parse } = require('path');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


readline.question('Por favor Ingrese un valor mayor a 1000 ', n1 => {
   readline.question('Por favor ingrese un valor menor a 100 ', n2 => {
        
        if( n1 >= 1000 && n2 <= 100){
            const total = n1 / n2;
            console.log(`El valor ${n1} cabe ${total} veces en el valor ${n2}`)
        }
            readline.close();
   })
 });