


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
    let subTotal = 0

    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].precio > 0 && carrito[i].cantidad > 0){
            subTotal += ((carrito[i].precio * carrito[i].cantidad))
        }
    }

    let IVA = subTotal * 0.16
    let total = subTotal + IVA

    return {
        subTotal: subTotal,
        IVA: IVA,
        total: total
    }
}



const carrito = [
    {
        producto: "Libro",
        precio: 100,
        cantidad: 2
    }
]


console.log(calcularTotal(carrito))
