// ¿Recuerdas tus clases de Geometría?

// Es momento de poner ese conocimiento a la práctica.
// El área de un triángulo se describe de la siguiente manera: A = (b * h) / 2 .

// El reto del día de hoy es escribir un programa que tome la base y
// la altura como parámetros y calcule el área del triángulo.
// Bonus: El programa debe determinar si el triángulo es isósceles,
// equilátero o escaleno.

const areaTriangulo = (b,h) => {
    const A = (b * h) / 2
    console.log(`El Area de un Triangulo de base ${b} y altura ${h} es de ${A}`);
}

areaTriangulo(10,2)