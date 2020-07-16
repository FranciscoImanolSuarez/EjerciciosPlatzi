// ¿Sabes cuántos segundos hay en 32 horas y 20 minutos?
// No te preocupes, yo tampoco. Para eso tenemos a las computadoras.
// El reto del día de hoy es escribir un programa que tome como parámetros
// las horas y los minutos y que nos calcule los segundos. ¿En cuántos lenguajes
// de programación puedes escribir este programa?

let hora = parseInt(prompt("Hola, ingrese la cantidad de horas"));
let minutos = parseInt(prompt("Ahora ingrese los minutos"));
let segundos = horas * 3600 + minutos * 60;

console.log(
  `En un lapse de ${hora} horas y ${minutos} minutos hay un total de ${segundos} segundos`
);
