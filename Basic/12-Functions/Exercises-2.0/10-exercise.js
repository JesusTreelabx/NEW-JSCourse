

/* Promoción de hamburguesas en Carl's Jr
Diseña una función llamada promocionCarlsJr que reciba el tipo de hamburguesa
(ej. "sencilla", "doble", "triple") y un booleano que indique si el cliente quiere papas fritas incluidas.
Una hamburguesa sencilla cuesta $4, doble $6 y triple $8. Si se incluyen papas, se suma $2 al total, 
pero si el pedido es de una hamburguesa triple, las papas son gratis. 
La función debe devolver el costo total del pedido. */

function promocionCarlsJr(tipoDeHamburguesa, requierePapas){
    let total = 0

    if(tipoDeHamburguesa === "sencilla"){
        total += 4
    }
    if(tipoDeHamburguesa === "doble"){
        total += 6
    }
    if(tipoDeHamburguesa === "triple")
        total += 8

    if(requierePapas && tipoDeHamburguesa === "triple"){
        total -= 2
    }

    return total
}

console.log(promocionCarlsJr("triple", true))