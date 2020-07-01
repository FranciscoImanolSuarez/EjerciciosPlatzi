// Instrucciones: añadiendo un extra al reto anterior ahora el usuario ingresará 3 números, sumarás los 2 primeros y el resultado será multiplicado por el tercero. Añade las consideraciones del punto decimal del reto anterior.
// Ejemplo:
// Datos de entrada:2, 3, 4
// Resultado:20


const { parse } = require('path');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Por favor Ingrese el primer numero a sumar ', n1 => {
   readline.question('Por favor ingrese el segundo numero a sumar', n2 => {
        readline.question('POr 3', n3 => {
            const result = Math.round((parseFloat(n1) + parseFloat(n2)) * n3)
            console.log(result);
            readline.close();
        })   
   })
 });