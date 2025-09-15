


/* 17. Reparto proporcional de propinas
Función: repartirPropinas(ventas, propinaTotal)
• ventas: { nombre, ventas }.
• Si la suma de ventas es 0, todos reciben 0.
• Redondear a 2 decimales y ajustar último elemento para que la suma coincida
con propinaTotal.
Ejemplo
repartirPropinas( [{ nombre: "Ana", ventas: 300 }, { nombre: "Luis", ventas: 200 }], 100 )
Salida esperada
[ { nombre: "Ana", propina: 60.00 }, { nombre: "Luis", propina: 40.00 } ]
*/

function repartirPropinas(ventas, propinaTotal){
    let totalDeVentas = 0

    for(let i = 0; i < ventas.length; i++){
        totalDeVentas += ventas[i].ventas
    }

    for(let i = 0; i < ventas.length; i++){
        ventas[i].propinas = (ventas[i].ventas / totalDeVentas) * propinaTotal
        ventas[i].propinas = parseFloat(ventas[i].propinas.toFixed(2))
    }
    console.log(ventas)
}

const propinaTotal = 200
const ventas = [
    {
        nombre: "Ana",
        ventas: 480
    },
    {
        nombre: "Luis",
        ventas: 220
    }
]

const propinaTotal2 = 500
const ventas2 = [
    {
        nombre: "Ana",
        ventas: 660
    },
    {
        nombre: "Luis",
        ventas: 390
    },

]

const propinaTotal3 = 1800
const ventas3 = [
    {
        nombre: "Ana",
        ventas: 4700
    },
    {
        nombre: "Luis",
        ventas: 4200
    },

]


console.log(repartirPropinas(ventas, propinaTotal))
console.log(repartirPropinas(ventas2, propinaTotal2))
console.log(repartirPropinas(ventas3, propinaTotal3))

