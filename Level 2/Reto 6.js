// Reto #6 - Edad permitida
// Pide al usuario que ingrese su edad y mostrarás un mensaje
// correspondiente si esta coincide con las siguientes condiciones:
// Más de 30 años: Nunca es tarde para aprender ¿Qué curso tomaremos?
// Entre 29 y 18 años: Es un momento excelente para impulsar tu carrera.
// Menos de 18 años: ¿Sabes hacia dónde dirigir tu futuro? Seguro puedo ayudarte.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Ingrese su edad ', edad => {
    if (edad < 18){
        console.log('¿Sabes hacia donde dirigir tu futuro? Seguro podemos ayudarte.')
    } else if(edad >= 18 && edad <= 29) {
        console.log('Es un momento excelente para impulsar tu carrera.')
    } else {
        console.log('Nunca es tarde para aprender ¿Qué curso tomaremos?')
    }

    readline.close();
 });