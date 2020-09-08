// Las matemáticas son base fundamental de la lógica y programación,
// por eso es importante practicarlas constantemente. Un cilindro es un cuerpo geométrico que
// requiere de varias fórmulas, aplícalas en un programa que reciba datos como su altura y radio
// de las bases para mostrar el resultado acotado a un decimal.


let radio, altura = 0;

// R = Radio 
// A = Altura

const volumen = (r, a) => {
    console.log(Math.pi * (Math.pow(r, 2)) * a)
}


volumen(10, 12)