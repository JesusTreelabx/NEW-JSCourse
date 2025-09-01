

/* Descuento por membresía en Cinépolis
Diseña una función llamada calcularEntradaCinepolis que reciba el número de boletos 
y un booleano que indique si el cliente tiene membresía VIP. Cada boleto cuesta $10, 
pero los clientes con membresía VIP reciben un 15% de descuento por boleto. 
La función debe devolver el costo total de los boletos. */

function calcularEntradaCinepolis(numeroDeBoletos, membresiaVIP) {
    let precioBoleto = 10
    let subTotal = precioBoleto * numeroDeBoletos
    let precioFinal = membresiaVIP === true ? (subTotal * 0.85) : subTotal


    return `Numero de boletos ${numeroDeBoletos} 
    su boleto incluye membresia VIP ${membresiaVIP} 
    y el costo total es de $ ${precioFinal}`

}

console.log(calcularEntradaCinepolis(2, false))
console.log(calcularEntradaCinepolis(1, true))
console.log(calcularEntradaCinepolis(5, true))