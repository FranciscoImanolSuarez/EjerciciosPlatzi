// Instrucciones: vas con tus amigos a tu restaurante favorito y acuerdan dividir la cuenta. Para facilitar las cosa pedirás al usuario que indique el total a pagar, entre cuantas personas se dvidirá la cuenta, porcentaje de propina a incluir, un porcentaje de impuestos, total a pagar incluyendo propina más impuestos y el total a pagar por cada persona.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Por favor indique el total a pagar ', n1 => {
   readline.question('Cuanto van a dejar de propina?', n2 => {
    readline.question('Cuantos son?', n3 => {

        const total = Math.round((parseFloat(n1) + parseFloat(n2)))
        const totalMasImpuesto = total * 0.3
        const porCabeza = total / n3
        console.log(totalMasImpuesto)
        console.log(total);
        console.log(porCabeza)
        readline.close();
    })
   })
 });