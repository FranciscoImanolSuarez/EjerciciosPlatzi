// ¿Necesitamos nuestra Casio cuando tenemos Python?
// Yo la verdad todavía amo a mi calculadora de bolsillo, pero también amo hacer programas.
// El reto del día de hoy es crear una calculadora básica que reemplace a nuestra Casio.
// Crea un programa que tome un número, un operador, y otro número y realice el cálculo correcto.
// Ejemplo:```
// calculadora(2, “+”, 2) -> 4
// calculadora(4, “/”, 2) -> 2

const { parse } = require('path');


function calculadora (n,x,z) {
// N NUMERO 1 A SUMAR
// X NUMERO 2 A SUMAR
// Z OPERADOR

switch (z) {
    case '*':
        return n * x
        break;
    case '+':
        return n + x
        break;
    case '-':
        return n - x 
        break;
    case '/':
        return n / x
        break;
    default:
        break;
    }

}




const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Ingrese el primer numero a sumar ',n => {
    readline.question('Ingrese el segundo numero a sumar ',x => {
        readline.question('Ingrese el operador ',z => {
            console.log(calculadora(parseFloat(n),parseFloat(x), z))
         readline.close();
        });
    });
 });