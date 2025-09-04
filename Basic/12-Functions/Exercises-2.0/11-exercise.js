

/* Actualizar Inventario en Minisuper
Función: actualizarInventario(productos, movimientos)
• productos: arreglo de objetos { sku, nombre, stock }.
• movimientos: arreglo de objetos { sku, tipo: "entrada"|"salida", cantidad }.
• Validaciones: cantidad > 0, el SKU debe existir, no permitir salida si el stock quedaría negativo.
• Salida: { inventarioActual, totalEntradas, totalSalidas }.  
Ejemplo
actualizarInventario( [{ sku: "A1", nombre: "Agua", stock: 5 }], [ { sku: "A1", tipo:
"entrada", cantidad: 3 }, { sku: "A1", tipo: "salida", cantidad: 2 } ] )
Salida esperada
{ inventarioActual: [{ sku: "A1", nombre: "Agua", stock: 6 }], totalEntradas: 3,
totalSalidas: 2 } */

function actualizarInventario(productos, movimientos){
    let entrada = 0
    let salida = 0

    for(let i = 0; i < movimientos.length; i++){
        let mov = movimientos[i]   // Aqui guardamos el objeto actual  
        
        if(mov.tipo === "entrada"){
            entrada += mov.cantidad
        }
        if(mov.tipo === "salida"){
            salida += mov.cantidad
        }
        }
}

console.log(actualizarInventario())