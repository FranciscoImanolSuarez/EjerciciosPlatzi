var prompt = require("prompt");

// Reto #5 - ¿Cómo está el clima?
// Crea un programa que pregunte
// al usuario si está lloviendo, en caso de responder “sí”
// pregunta si está haciendo mucho viento y si responde “sí”
// nuevamente muestra un mensaje indicando que hace mucho viento
// para salir con una sombrilla. En caso contrario, anima al usuario a
// que lleve una sombrilla. Para el caso de responder “no” en la primer
// pregunta, entonces solo desea un bonito día.
// Considera que las respuestas pueden pasarse
// minúsculas para evitar posibles errores.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Hola, esta lloviendo? ', var1 => {
    
    if (var1.toUpperCase().includes('SI')){
       const var2 = prompt('Hay mucho viento?')
        if(var2.toUpperCase().includes('SI')) {
            console.log('Hace mucho viento para salir con sombrilla')
        } else {
            console.log('Hey! Lleva una sombrilla! Cuidate del sol!')
        }
    } else {
        console.log('Te deseo un bonito dia')
    }
    readline.close();
 });