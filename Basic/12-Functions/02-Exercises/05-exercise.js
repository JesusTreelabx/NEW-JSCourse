


/* 5. Calcular Total en Carrito de Librería
Función: calcularTotal(carrito)

Contexto:
Se desea calcular el total de un carrito de compras.

Parámetros:
- carrito: arreglo { producto, precio, cantidad }

Reglas de validación:
- precio > 0
- cantidad "e1
- IVA del 16%

Salida esperada:
{ subtotal: 200, iva: 32, total: 232 }

Ejemplo:
calcularTotal([
{ producto: "Libro", precio: 100, cantidad: 2 }
]);
*/

function calcularTotal(carrito){

    if(carrito.precio <= 0){
        return "Para que la compra sea valida el precio debe ser mayor a 0"
    }
    if(carrito.cantidad <= 0){
        return "Debe incluir al menos un producto "
    }

    const subTotal = (())
}



const carrito = [
    {
        producto: "Libro",
        precio: 100,
        cantidad: 2
    }
]


console.log(calcularTotal(carrito))
