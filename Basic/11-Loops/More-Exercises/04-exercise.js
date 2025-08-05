

/* 4. Eliminar Productos Descontinuados
CONTEXTO: Una tienda tiene un arreglo de productos con un campo isDiscontinued: true/false.
EJERCICIO: Crea un nuevo arreglo que excluya los productos descontinuados. */
const productos = ["Laptop", "Celular", "Consola", "Videojuego", "TV"]
const isDiscontinued = true

for (let i = 0; i < productos.length; i++) {
    if (productos[i] === "Videojuego") {
        console.log(`${isDiscontinued}`)
    }
}