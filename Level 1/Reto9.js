// Instrucciones: escribe un programa al que le indiques una cantidad de días y como resultado deberá mostrar cuantas horas, minutos y segundos hay en dicha cantidad de días.

const dias = (totalDias) => {
    const horas = totalDias * 24;
    const minutos = horas * 60;
    const segundos = parseFloat(minutos * 60);
    
    console.log(`En un total de ${totalDias} Dias, hay un total de ${horas} horas, ${minutos} de Minutos y un total de ${segundos} segundos;`)
}

dias(2)