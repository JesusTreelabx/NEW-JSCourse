

/* Cálculo de combos en KFC
Crea una función llamada calcularComboKFC 
que reciba la cantidad de piezas de pollo, complementos (papas o ensalada) y bebidas. 
Cada pieza de pollo cuesta $2, cada complemento $1.5 y cada bebida $1. La función 
debe devolver el costo total del combo, incluyendo un 8% de propina si el pedido supera 
las 10 piezas de pollo. */

function comboFC(piezasDePollo, complementos, bebidas) {
    let sum = 0

    if(piezasDePollo > 0) {
        sum += piezasDePollo * 2
    }
    if(complementos > 0) {
        sum += complementos * 1.5
    }
    if(bebidas > 0) {
        sum += bebidas * 1
    }

    let propina = sum * .08
    if(piezasDePollo > 10){
        sum += propina 
    }

    return sum
}

console.log(comboFC(5, 1, 3))
console.log(comboFC(18, 2, 7))
console.log(comboFC(24, 5, 11))
console.log(comboFC(3, 1, 1))
console.log(comboFC(10, 2, 3))