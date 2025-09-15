

/* 8. Entregas Realizadas por Día
Función: calcularEntregas(entregas)

Contexto:
Uber quiere saber el total de kilómetros y tiempo promedio de sus repartidores.

Parámetros:
- entregas: arreglo { id, km, tiempoMin }

Reglas de validación:
- km > 0
- tiempoMin > 0

Salida esperada:
{ totalKm: 20, promedioTiempo: 15 }

Ejemplo:
calcularEntregas([
{ id: 1, km: 10, tiempoMin: 15 },
{ id: 2, km: 10, tiempoMin: 15 }
]); */

function calcularEntregas(entregas){
    let tiempoTotal = 0 
    let totalKm = 0
    let contador = 0

    for(let i = 0; i < entregas.length; i++){ // Agregamos un for para recorrer las entregas.
        if(entregas[i].km > 0 && entregas[i].tiempoMin > 0){ // Hacemos un if para validar los km con el tiempo y sumandolos ademas de agregar un contador.
            contador++
            totalKm += entregas[i].km 
            tiempoTotal += entregas[i].tiempoMin
        }
    }

    let promedioTiempo = tiempoTotal / contador // Agregamos esta variable para calcular el promedio de tiempo

    return {
        totalKm: totalKm,
        tiempoTotal: promedioTiempo
    }
}

const entregas = [
    {
        id: 1,
        km: 10,
        tiempoMin: 15
    },
    {
        id: 2,
        km: 10,
        tiempoMin: 15
    },
    {
        id: 3,
        km: 10,
        tiempoMin:15
    },
    {
        id: 4,
        km: 10,
        tiempoMin: 15
    }
]

console.log(calcularEntregas(entregas))

