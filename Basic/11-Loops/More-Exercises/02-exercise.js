

/* 2. Aplicar descuentos📦
CONTEXTO: Una tienda tiene un arreglo de precios.
EJERCICIO: Si el precio es mayor a $500, aplicar un 10% de descuento. Guarda los nuevos precios en otro arreglo. */
const preciosProductos = [400, 700, 200, 550, 900, 300, 1000, 800, 1400]
const descuentoProductos = []


for (let i = 0; i < preciosProductos.length; i++) {
    if (preciosProductos[i]  > 500) {

        const productoConDescuento = preciosProductos * 0.9
        descuentoProductos.push(productoConDescuento)
    }
    
}


console.log(descuentoProductos)