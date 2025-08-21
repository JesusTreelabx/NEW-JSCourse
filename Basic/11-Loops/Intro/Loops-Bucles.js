// Loops (Bucles)

// for
for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) { 
    console.log(`Elementos: ${numbers[i]}`)
}
/* // (for) Con la variable numbers y agregando .length si aumentas la lista de elementos 
[1, 2, 3, 4, 5] a [1, 2, 3, 4, 5, 6, 7, 8] seguira funcionando perfectamente, 
ahora de manera dinamica sera capaz de ejecutar un 
(Loop) (let i = 0; i < numbers.length; i++) desde el indice 0 hasta 
el tamanio que vaya tomando este listado [1, 2, 3, 4, 5, 6, 7, 8]. */




// while
let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}
/* // (while) es algo que yo puedo tener definido con anterioridad */



// Bucle infinito
/* while(true) {
} */




// do while
i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while(i < 5)



// for of
/* Caso de uso: McDonald's
Imagina que trabajas en un McDonald's y necesitas procesar los pedidos de los clientes 
en una lista. Cada pedido tiene un producto (como "Big Mac" o "McFlurry"). 
Usaremos un bucle for...of para iterar sobre la lista de pedidos y mostrar 
un mensaje para cada uno, como si estuviéramos preparando los productos.
Escenario: Un cliente hace un pedido con varios ítems, y el sistema debe mostrar 
cada ítem para que el cocinero lo prepare. */
let pedidos = ["Big Mac", "McFlurry", "Papas Fritas", "Coca-Cola"]
for (let item of pedidos) {
    console.log(`Preparando: ${item}`)
}