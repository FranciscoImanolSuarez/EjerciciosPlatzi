// Instrucciones: llegaste a una fiesta con X cantidad de rebanadas de pizza (indicadas por el usuario), después de un rato se consumió Y cantidad de rebanadas y quedan Z. Fácil ¿cierto?
// El reto está en que expreses lo que sucede es una forma comprensible para cualquier persona, imprescindible pensar en tus usuarios 😉


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Cantidad de pizzas que hay ', n1 => {
  setTimeout(function () {
    readline.question('Ya paso un tiempo cuantas pizzas quedan?', n2 => {
      const z = n1 - n2
      console.log(`Se consumieron un total de: ${z} porciones`);
      readline.close();
  })
  },1000)
 });