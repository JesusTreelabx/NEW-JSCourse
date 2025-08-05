

/* 1. Verificar stock de productos🛒
CONTEXTO: Una tienda tiene un arreglo de productos con sus cantidades.
EJERCICIO: Recorre el arreglo y muestra solo los productos que tienen más de 0 en stock. */
const productos = [1, 4, 7, 0, 2, 0, 7]


for (let i = 0; i < productos.length; i++) {
    if (productos[i] > 0 ) {
        console.log("Hay existencia en stock!")
    } 
}
