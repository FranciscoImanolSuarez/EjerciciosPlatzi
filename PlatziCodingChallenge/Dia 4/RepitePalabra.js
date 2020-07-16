// ¿Sabías que para repetir las mismas instrucciones dentro de un programa
// podemos utilizar for loops o while loops? ¿Sabías que todo lo que puedes hacer
// con esas loops lo puedes hacer con recursión?
// El reto del día de hoy es crear un programa que recibe como parámetro un string
// y la cantidad de veces que queremos repetir ese string y devuelve una cadena
// con las repeteciones. ¿El twist? Sólo puedes usar una función recursiva
// (pro tip: no olvides tu caso base).

let str = prompt('Mensaje a repetir')
let n = prompt('Numero a repetir')

function repetir (string,x){
    if (x <= 1) {
        return string
    } else {
        return repetir(string, x-1) + ' ' + string + ' '
    }
}

console.log(repetir(str,n))