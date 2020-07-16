// Este es un juego en el que nunca fui bueno, pero eso no significa que hacer un
// programa sea difícil.El reto del día de hoy es escribir un programa que reciba como
// parámetro “piedra”, “papel”, o “tijera” y determine si ganó el jugador 1 o el jugador 2.
// Bonus: ¿puedes hacer modificar tu programa para que el ganador sea el que gané 2 de 3
// partidas?Ejemplo:```
// ppt(“piedra”, “papel”) ➞ “El ganador es el jugador 2”

function maquina (){
    const acciones = ['Piedra','Papel','Tijera'];
    let i = Math.round(Math.random(0,3))
    return acciones[i];
}


const user = prompt('Ingrese un valor')

if (user === maquina) {
    return 'Empate'
}
