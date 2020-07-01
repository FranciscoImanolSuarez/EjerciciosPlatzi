// Instrucciones: hay 1.609344 km en una milla (mi). Escribe un programa en el que el usuario indique una cantidad de millas y muestre en pantalla el resultado convertido a kilómetros.

const millasToKm = (mi) => {
    const resp = mi * 1.609344
    console.log(`En ${mi} millas, hay ${resp} Kilometros`)
}

millasToKm(4)