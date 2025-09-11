


/* 3. Inventario en Panadería
Función: actualizarStock(productos, venta)
Contexto:
Se lleva el control del stock de productos vendidos.

Parámetros:
- productos: arreglo de objetos { id, nombre, stock }
- venta: objeto { id, cantidad }

Reglas de validación:
- Producto debe existir
- cantidad > 0
- No permitir dejar el stock negativo

Salida esperada:
{ actualizado: true|false, mensaje, productosActualizados }

Ejemplo:
actualizarStock(
[ { id: 1, nombre: "Pan", stock: 10 } ],
{ id: 1, cantidad: 3 }
);

Salida esperada:
{
actualizado: true,
mensaje: "Stock actualizado",
productosActualizados: [
{ id: 1, nombre: "Pan", stock: 7 }
]
} 
*/

// Servidor
function actualizarStock(productos, venta){

    // for(let i = 0; i < productos.length; i++){
    //     if(productos[i].id === venta.id){
    //         return ""
    //     }
    // }

    if(venta.cantidad <= 0){
        return "La venta no debe ser menor o igual a cero!"
    }
    if(productos.stock <= 0){
        return "El stock no puede quedarse sin ningun producto"
    }

    return {
        actualizado: true,
        mensaje: "Stock actualizado"
    }

}



// Productos
const productos = [
    {
        id: "k011v",
        nombre: "Pan",
        stock: 10
    },
    {
        id: "k012v",
        nombre: "Bolillo",
        stock: 10
    },
    {
        id: "k013v",
        nombre: "Concha",
        stock: 10
    },
    {
        id: "k014v",
        nombre: "Dona",
        stock: 8
    },
]


// Ventas
const venta01 = {
    id: "k012v",
    cantidad: 4
}


const venta02 = {
    id: "k013v",
    cantidad: 11//Aqui nos da error no hay los suficientes productos en el stock
}

const venta03 = {
    id: "k012545uhev", //Error por que el id no existe
    cantidad: 4
}


console.log(actualizarStock(productos, venta01))