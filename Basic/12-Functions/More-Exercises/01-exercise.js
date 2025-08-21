

// Crea una Function de verificar stock de productos
// Contexto: Una tienda tiene un arreglo de productos con sus cantidades.
// Recorre el arreglo y muestra solo los productos que tienen más de 0 en stock.
function verStock(arrProd) {
    for (let i = 0; i < arrProd.length; i++) {
        if (arrProd[i] > 0) {
            console.log(`${arrProd[i]} Hay existencia en stock! `)
        }
    }
}

const productos = [1, 4, 7, 0, 2, 0, 7]
verStock(productos)
