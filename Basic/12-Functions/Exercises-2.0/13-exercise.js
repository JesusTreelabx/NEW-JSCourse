

/* . Carrito del súper con cupón
Función: calcularTotalCarrito(items, cupon)
• items: { producto, categoria, precio, cantidad }.
• Reglas: Subtotal = Σ (precio * cantidad). IVA 16% para categorías ≠ "fruta"/"verdura".
• Cupón "DESC10" aplica 10% si subtotal ≥ 100.
• Validar precio > 0 y cantidad ≥ 1.
• Salida: { subtotal, impuestos, descuento, total }.
Ejemplo
calcularTotalCarrito( [ { producto: "Manzana", categoria: "fruta", precio: 10, cantidad: 3
}, { producto: "Shampoo", categoria: "higiene", precio: 50, cantidad: 1 } ], "DESC10" )
Salida esperada
{ subtotal: 80, impuestos: 8, descuento: 8, total: 80 } */