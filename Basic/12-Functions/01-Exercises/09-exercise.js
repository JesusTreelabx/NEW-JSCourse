

/* Tiempo de espera en Tacos el Gordo
Implementa una funciónn llamada tiempoEsperaTacos que reciba el tipo de taco
("Asada, "Pastor", "Lengua") y la cantidad de tacos pedidos.
El Taco de Asada toma 2 minutos, Taco al Pastor 3 min., Taco de Lengua 4 min.
en prepararse. La funcion debe devolver un mensaje como: 
"Tu pedido de [cantidad] tacos de [tipo] estará listo en [minutos] minutos." */


function tiempoEsperaTacos(cantidadTacos, tipoDeTaco) {
    let minutos = 0

    if(tipoDeTaco === "Asada"){
        minutos += 2
    }
    if(tipoDeTaco === "Pastor"){
        minutos += 3
    }
    if(tipoDeTaco === "Lengua"){
        minutos += 4
    }

    let totalMinutos = cantidadTacos * minutos //Validación para obtener el total de minutos.

    return `Tu pedido de ${cantidadTacos} tacos de ${tipoDeTaco} estara listo
    en ${totalMinutos} minutos.`
}


console.log(tiempoEsperaTacos(2, "Asada"))