// Crearás un un script para el que el usuario indicará un número entre 1 y 6.
// Como respuesta se le brindará un mensaje según el número leido:
// 1 - “Hoy aprenderemos sobre prorgamación”
// 2 - “¿Qué tal tomar un curso de marketing digital?
// 3 - “Hoy es un gran día para comenzar a aprender de diseño”
// 4 - ¿Y si aprendemos algo de negocios online?
// 5 - “Veamos un par de clases sobre producción audiovisual”
// 6 - “Tal vez sea bueno desarrollar una habilidad blanda en Platzi”
// En caso indicar un número distinto, pedir al usuario que ingrese uno en el
// rango válido.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Ingrese un numero entre 1 y 6 ', n => {
   if (parseFloat(n)>= 1 && parseFloat(n) <= 6){
    switch (parseFloat(n)) {
        case 1:
            console.log('Hoy aprenderemos sobre prorgamación')
            break;
        case 2:
            console.log('¿Qué tal tomar un curso de marketing digital?')
            break;
        case 3:
            console.log('Hoy es un gran día para comenzar a aprender de diseño')
            break;
        case 4:
            console.log('Y si aprendemos algo de negocios online')
            break;
        case 5:
            console.log('Veamos un par de clases sobre producción audiovisual')
            break;
        case 6:
            console.log('Tal vez sea bueno desarrollar una habilidad blanda en Platzi')
            break;
      }
    } else {
        console.log('Ingrese un numero entre 1 y 6')
    }
    readline.close();
 });