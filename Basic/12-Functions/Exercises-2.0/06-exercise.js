

/* Cálculo de combos en KFC
Crea una función llamada calcularComboKFC 
que reciba la cantidad de piezas de pollo, complementos (papas o ensalada) y bebidas. 
Cada pieza de pollo cuesta $2, cada complemento $1.5 y cada bebida $1. La función 
debe devolver el costo total del combo, incluyendo un 8% de propina si el pedido supera 
las 10 piezas de pollo. */

function calcularComboKFC(piezasDePollo, complementos, bebidas) {
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
    //propina
    if(piezasDePollo > 10) {
        sum += propina
    }

    return sum
}


console.log(calcularComboKFC(8, 2, 4))
console.log(calcularComboKFC(3, 1, 1))
console.log(calcularComboKFC(12, 2, 4))  // con propina