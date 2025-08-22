

// Aplicar descuentos, Contexto:
// Una tienda tiene un arreglo de precios.
// Si el precio es mayor a $500, aplicar un 10% de descuento. 
// Guarda los nuevos precios en un nuevo arreglo.

const preciosProductosCliente1 = [400, 700, 200, 550, 900, 300, 1000]

function descuentoProductos(precios) {
    let nuevosPrecios = [ ]

    for(let i = 0; i < precios.length; i++) {
        if(precios[i] > 500) {
            nuevosPrecios.push(precios[i] * 0.9) //
        } else {
            nuevosPrecios.push(precios[i])
        }
    }
    return nuevosPrecios
}

console.log(descuentoProductos(preciosProductosCliente1))